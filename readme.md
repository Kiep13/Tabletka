# 💊 Tabletka

An app to find the availability of pills in different pharmacies

### 🧩 Apps

In apps folder you can see two main repo applications:

- `api`: a [Nest.js](https://nestjs.com/) app for back-end side
- `web`: a [Next.js](https://nextjs.org/) app for front-end side

### 💾 Database

This application uses `PostgreSQL` for storing data and `pgAdmin` for monitoring the previous one. 
It applied with docker containers, which are conduct `docker-compose`.

For ORM purposes this application uses `Prisma`

For applying table migrations you should run:
```sh
prisma migrate deploy
```

### 🐋 Docker

`docker-compose.yml` stored in `docker` folder. To rollup it, move to this folder and run this:

```sh
docker compose --env-file dev.env up -d
```

After running, `pgAdmin` is available locally [here](http://localhost:5050/browser/).

### 💭 Elasticsearch

This project uses Elasticsearch to optimize search queries. It aslo possible access  to Kibana to view statistics and dev console

In local development Kibana accessible [here](http://localhost:5601).
Kibana Dev Tools accessible [here](http://localhost:5601/app/dev_tools#/console)

### 🏁 Run dev mode

To run applications in developer mode, run: 

```sh
yarn dev
```

Api application uses GraphQL. Its playground is available [here](http://localhost:4000/graphql).

### 🏗️ Build

To build all apps and packages, run the following command:

```sh
yarn build
```

### 📃 Useful commands
 
You can find other commands connected to used frameworks & libraries [here](docs/useful-commands.md)