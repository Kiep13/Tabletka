## ![Prisma](https://prismalens.vercel.app/header/logo-dark.svg)
Create migrations file steps:

1. Move to the `apps/api` folder
2. Run next command
```sh
prisma migrate dev --name migration-name
```
3. Apply migrations with command:
```sh
prisma migrate deploy
```