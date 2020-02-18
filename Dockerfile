FROM node:12.6.0

WORKDIR /usr/src/msimbo-react

COPY ./ ./

ENV MLAB_PASSWORD_WEBDEV=cliff92711
ENV MLAB_USERNAME_WEBDEV=admin
ENV NODE_ENV=production

ENV PORT=80

RUN npm install && npm run clientinstall && npm rebuild node-sass --prefix client && npm run build

EXPOSE 80

CMD ["npm", "start"]