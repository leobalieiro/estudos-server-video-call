const express = require("express");
const io = require("socket.io")({ path: "/webrtc" });
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

const server = app.listen(port, () => console.log(`http://localhost:${port}`));

io.listen(server);
const users = new Map();
const rooms = new Map();
const peers = io.of("/webrtcPeer");
peers.on("connection", (socket) => {

    peers.emit("USUARIO_CONECTADO", true);

    socket.on("room-join", (data) => {
        const { roomId, userId } = data;

        if (!roomId) return;
        if (!userId) return;

        users.set(socket.id, { socketId: socket.id, userId, roomId });
        if (!rooms.has(roomId)) rooms.set(roomId, [socket.id]);
        else rooms.get(roomId).push(socket.id);
    });
    socket.on("room-offer-answer", (data) => {
        const { roomId, userId, username, type, sdp } = data;
        const user = users.get(socket.id);

        if (user?.roomId != roomId) return;
        if (user?.userId != userId) return;
        if (!rooms.has(roomId)) return;

        // console.log(rooms.get(roomId));

        rooms
            .get(roomId)
            .filter((socketId) => socketId != socket.id)
            .forEach((socketId) => {
                // console.log(socketId);
                peers.to(socketId).emit("room-offer-answer", {
                    roomId,
                    userId,
                    username,
                    type,
                    sdp,
                });
            });
    });
    socket.on("room-candidate", (data) => {
        const { roomId, userId, candidate } = data;
        const user = users.get(socket.id);

        if (user?.roomId != roomId) return;
        if (user?.userId != userId) return;
        if (!rooms.has(roomId)) return;

        rooms
            .get(roomId)
            .filter((socketId) => socketId != socket.id)
            .forEach((socketId) => {
                peers.to(socketId).emit("room-candidate", candidate);
            });
    });

    socket.on("disconnect", () => {
        const user = users.get(socket.id);

        if (rooms.has(user?.roomId)) {
            const currentRoom = rooms.get(user?.roomId);
            const filteredRoom = currentRoom.filter((id) => id != socket.id);

            rooms.set(user?.roomId, filteredRoom);
            if (rooms.get(user?.roomId).length == 0) rooms.delete(user?.roomId);
        }
        users.delete(socket.id);
    });
});
