# 💊 Tabletka

An app to find the availability of pills in different pharmacies

### 🧩 Apps

In apps folder you can see two main repo applications:

- `api`: a [Nest.js](https://nestjs.com/) app for back-end side
- `web`: a [Next.js](https://nextjs.org/) app for front-end side

### 💾 Database

This application uses `PostgreSQL` for storing data and `pgAdmin` for monitoring the previous one. 
It applied with docker containers, which are conduct `docker-compose`.

### 🐋 Docker

`docker-compose.yml` stored in `docker` folder. To rollup it, move to this folder and run this:

```sh
docker compose --env-file dev.env up -d
```

After running, `pgAdmin` is available locally [here](http://localhost:5050/browser/).

### 🏁 Run dev mode

To run applications in developer mode, run: 

```sh
yarn dev
```

### 🏗️ Build

To build all apps and packages, run the following command:

```sh
yarn build
```

### 📃 Useful commands
 
You can find other commands connected to used frameworks & libraries [here](./useful-commands.md)