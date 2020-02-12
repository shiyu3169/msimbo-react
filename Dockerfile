FROM node:12.6.0

WORKDIR /usr/src/msimbo-react

COPY ./ ./

RUN npm install && npm run clientinstall && npm run build

CMD ["/bin/bash"]