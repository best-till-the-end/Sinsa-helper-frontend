FROM node:17.9.1

WORKDIR /server

COPY ./* /server

RUN ["npm","init","-y"]

RUN ["npm","install","-y"]

ENTRYPOINT ["npm","run","start"]
