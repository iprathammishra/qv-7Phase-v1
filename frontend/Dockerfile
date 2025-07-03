FROM node:22 AS build
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80