FROM node:alpine

WORKDIR /app

COPY package.json ./

RUN npm install
COPY . .

RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.4/zsh-in-docker.sh)" -- \
    -t lambda

EXPOSE 6006

CMD [ "npm", "run", "dev" ]