# syntax=docker/dockerfile:1
FROM node:16-buster

# Node v16 was chosen because I am afraid Node v17
# is still too new (library issues?)

# Set the working directory to /code
WORKDIR /code
# copy all source files
COPY . .
ENV DEBIAN_FRONTEND=noninteractive
# install all dependencies
RUN apt-get update -y
RUN apt install git
RUN apt install yarn -y
RUN yarn install
RUN apt-get update -y
# expose necessary ports
EXPOSE 3000
CMD ["./start.sh"]