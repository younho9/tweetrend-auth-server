# <a href="https://drive.google.com/file/d/1uWxr1ZPFfW5JQ7ZooXVwcSWvQPUxD2LF/view?usp=sharing"><img src="https://raw.githubusercontent.com/younho9/tweetrend-frontend/main/docs/images/logo.svg" alt="tweetrend" width="240px"/></a> Auth Server

## Architecture

![architecture-diagram](https://github.com/younho9/tweetrend-frontend/blob/main/docs/images/architecture-diagram.png?raw=true)

## Quick Start

**1. Clone Project**

```bash
git clone https://github.com/younho9/tweetrend-auth-server.git
```

**2. Configure Environment Variables**

Create `.env` file in root directory.

> ☝️ Also, you can manage development and testing as different env files. `.env.development` `.env.test`

[.env.example](/.env.example)

**3. Register Twitter App**

To use social login, you need to register the app on Twitter and write the callback URL.

**4. Install Dependencies**

```bash
yarn install
# or
# npm install
```

**5. Create Database**

[create-user.sql](docs/create-user.sql)

**6. Start**

```bash
# development
yarn start
# or
# npm run start

# watch mode
yarn start:dev
# or
# yarn run start:dev

# production mode
yarn start:prod
# or
# yarn run start:prod
```

**7. Build**

```bash
yarn build
# or
# npm run build
```

## Tech Stacks

| Area               | Tech Stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Backend            | ![](https://img.shields.io/badge/Typescript-blue?color=007ACC&longCache=true&logo=Typescript&logoColor=white) ![](https://img.shields.io/badge/NestJS-red?&color=E0234E&longCache=true&logo=NestJS) ![](https://img.shields.io/badge/TypeORM-red?&longCache=true&) ![](https://img.shields.io/badge/MySQL-gray?longCache=true&logo=mysql) ![](https://img.shields.io/badge/Sign_In_with_Twitter-white?color=1DA1F2&longCache=true&logo=twitter&logoColor=white) ![](https://img.shields.io/badge/JWT-darkgray?longCache=true&logo=JSON-Web-Tokens&logoColor=white) |
| Linter & Formatter | ![](https://img.shields.io/badge/Prettier-white?color=1E2B33&longCache=true&logo=Prettier) ![](https://img.shields.io/badge/ESLint-white?color=453ABC&longCache=true&logo=ESlint) ![](https://img.shields.io/badge/🐶_Husky-Green?longCache=true&logo=Husky)                                                                                                                                                                                                                                                                                                       |

## Resources

- [Architecture](https://app.cloudcraft.co/view/60e50b09-952e-47a7-be48-29307faa77bd?key=mX3xEz6obXvNNyA3LV1DPw)
- [Postman - TweeTrend](https://documenter.getpostman.com/view/11536347/TW74jQra#intro)

## See Also

- [tweetrend-frontend](https://github.com/younho9/tweetrend-frontend)

## License

[MIT](/LICENSE)
