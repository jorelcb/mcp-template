FROM node:18-alpine

WORKDIR /app

COPY package.json ./
# COPY package-lock.json ./ 

RUN npm install

COPY . .

RUN npm run build

# Stdout is used for protocol transport, so we don't expose a port usually,
# unless using SSE. But typically MCP over stdio is for local usage.
# If this container is generic, we just run the build.

ENTRYPOINT ["node", "build/index.js"]
