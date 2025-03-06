# Usa a imagem oficial do Node 18
FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Arquivos para serem copiados
COPY ./src .

# Instala as dependências
RUN npm install

# Expõe a porta que a aplicação irá rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
