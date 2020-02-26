FROM node:12.6.0

WORKDIR /usr/src/msimbo-react

COPY ./ ./

RUN npm install && npm run clientinstall && npm rebuild node-sass --prefix client && npm run build

EXPOSE 443
EXPOSE 80

CMD ["npm", "start"]

