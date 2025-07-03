FROM node:22
WORKDIR /app
COPY . .
RUN yarn install
EXPOSE 5000
CMD ["node", "server.js"]