FROM node:latest

RUN mkdir -p /opt/app
WORKDIR /opt/app

COPY ./ /opt/app
CMD ["node", "."]