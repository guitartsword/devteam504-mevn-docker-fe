FROM node:14-alpine as build

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build


# production environment
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
