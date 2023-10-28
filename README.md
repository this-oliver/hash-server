# Hash-Server

> This project is purely for educational purposes. It is not intended to be used in production.

The purpose of this project is to play around with Virtual Machines and, more specifically, Docker.

## Installation

pre-requisites:

- [Docker](https://docs.docker.com/engine/installation/)
- [Node.js](https://nodejs.org/en/download/)

```bash
# install pnpm
npm install -g pnpm

# install dependencies
pnpm install
```

## Getting Started

```bash
# build docker image

docker build -t hash-server .

## - `-t` is the tag name for the image
## - `.` is the path to the Dockerfile

# run the docker image in a container

docker run -p 3000:3000 -d hash-server

## - `-p` is the port mapping
## - `-d` is detached mode (runs container in the background)
```

## Usage

The server exposes two endpoints:

| Method | Path       | Parameters   | Description                                      |
| ------ | ---------- | ------------ | ------------------------------------------------ |
| `POST` | `/hash`    | sample       | Returns a SHA256 hash                            |
| `POST` | `/compare` | sample, hash | Returns a boolean if the hash matches the sample |
