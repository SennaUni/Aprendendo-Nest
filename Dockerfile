# Use uma imagem oficial do Node.js como base
FROM node:20-slim

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/src/nest/api

# Copie o arquivo package.json e o arquivo package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install --quiet --no-optional --no-fund --loglevel=error

# Copie o .env de produção 
COPY ./.env.prod ./.env

# Copie o restante dos arquivos do projeto para o contêiner
COPY . .

# Comando para dar build no projeto
RUN npm run build

# Expõe a porta que o aplicativo usará
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD [ "npm", "run", "start:prod" ]
