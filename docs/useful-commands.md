## ![Turorepo](https://engineering.linecorp.com/wp-content/uploads/2022/04/turborepo2.png)

[Official docs](https://turbo.build/repo/docs)

### Common commands

Add dependancy to one of the apps
```sh
  yarn workspace <workspace> add <package>
```

## ![Prisma](https://prismalens.vercel.app/header/logo-dark.svg)
Create migrations file steps:

1. Move to the `apps/api` folder
2. Run next command
```sh
services migrate dev --name migration-name
```
3. Apply migrations with command:
```sh
services migrate deploy
```

Update generated prisma client (!need to make every time after schema change to keep it up to date to `@prisma/client`):
```sh
services generate
```

###  ![Git Secret](https://sobolevn.me/git-secret/images/git-secret-big.png)

[Official documentation](https://sobolevn.me/git-secret/)

> Use **Git Bash** to run commands

To add file to get secret:
```sh
git-secret add
```

Encrypt added files:
```sh
git-secret hide
```

Decrypt added files
```sh
git-secret reveal
```

### ![Elasticsearch](https://raw.githubusercontent.com/dperson/elasticsearch/master/logo.png)

Full Elasticsearch documentation see [here](https://www.elastic.co/guide/en/elasticsearch/reference/index.html)<br/>
[Official Node.js client documentation](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html)