# Estudos Server Video Call

Sistema leve e robusto de WebSocket para comunicação via protocolos WebRTC, pronto para você implementar chamadas de vídeo 1x1. Ideal para aplicações que demandam videochamadas estáveis e seguras, como consultas online em saúde ou qualquer serviço que precise de comunicação direta por vídeo.

## 🚀 Funcionalidades Principais

- **Comunicação WebRTC** com servidores iceServers configurados para chamadas fora da rede local  
- **Sistema de salas (rooms)** integrado para organizar chamadas individuais (1x1)  
- **Estrutura simples, leve e fácil** de configurar  
- **Ideal para ambientes** de baixa latência e alta performance  

## 🔒 Segurança e Uso

- **Autenticação personalizada** para controle de acesso  
- **Geração de strings aleatórias** para acesso às chamadas, similar ao Google Meet  
- **Flexível para diferentes modelos** de autenticação conforme necessidade  
- **Compartilhamento de links** facilitado para entrada rápida  

## 🛠️ Inicialização do Ambiente

Para iniciar o servidor e o front-end, use o Docker Compose:

```bash
docker compose up --build
```

Após a inicialização:  

- **Front-end** disponível em: [http://localhost:3001](http://localhost:3001)  
- **WebSocket** do back-end rodando em: `ws://localhost:3001`  

## 🏗️ Estrutura do Projeto

```
estudos-server-video-call/
├── docker-compose.yml
├── Dockerfile
├── package.json
├── server.js
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── README.md
```

## 📋 Pré-requisitos

- Docker
- Docker Compose
- Navegador moderno com suporte a WebRTC

## 🎯 Como Usar

1. **Inicie os containers**:
   ```bash
   docker compose up --build
   ```

2. **Acesse a aplicação**:
   Abra [http://localhost:3001](http://localhost:3001) no seu navegador

3. **Crie ou entre em uma sala**:
   - Digite um nome para a sala
   - Compartilhe o link com outra pessoa
   - Inicie a videochamada

## 🔧 Tecnologias Utilizadas

- **WebRTC** - Captura e transmissão de vídeo e áudio
- **WebSocket** - Sinalização em tempo real
- **Docker** - Ambiente isolado e fácil deploy
- **Node.js** - Runtime do servidor
- **Express** - Servidor web

## 🎮 Comandos Úteis

```bash
# Iniciar aplicação
docker compose up

# Iniciar em background
docker compose up -d

# Parar aplicação
docker compose down

# Ver logs
docker compose logs

# Rebuildar imagens
docker compose up --build
```

## 🔄 Desenvolvimento

Para desenvolvimento local sem Docker:

```bash
# Instalar dependências
npm install

# Iniciar servidor
node server.js
```

## 🐛 Solução de Problemas

### Problemas Comuns

1. **WebSocket não conecta**:
   - Verifique se a porta 3001 está liberada
   - Confirme se o servidor está rodando

2. **Vídeo não carrega**:
   - Verifique permissões de câmera no navegador
   - Confirme se o HTTPS está habilitado (em produção)

3. **Erro de ICE candidates**:
   - Verifique configuração dos STUN/TURN servers
   - Confirme conectividade de rede

## 🤝 Como Contribuir

Pull requests, issues e sugestões são muito bem-vindas! Este projeto é ideal para quem quer entender e trabalhar com comunicação em tempo real com WebRTC.

### Processo de Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Em caso de dúvidas ou problemas:

1. Verifique a seção de Solução de Problemas
2. Abra uma issue no repositório
3. Entre em contato com a equipe de desenvolvimento

## 🔮 Roadmap

- [ ] Suporte a chamadas em grupo
- [ ] Chat em tempo real
- [ ] Gravação de chamadas
- [ ] Interface responsiva melhorada
- [ ] Métricas de qualidade de chamada

---

**Desenvolvido com ❤️ para facilitar videochamadas seguras e estáveis**
