# Dungeons and Dragons GraphQL API

[![Join the chat at https://gitter.im/dnd-graphql/Lobby](https://badges.gitter.im/dnd-graphql/Lobby.svg)](https://gitter.im/dnd-graphql/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
![Status: Not Ready for use (still in development)](https://img.shields.io/badge/status-not%20ready%20for%20use-red.svg)

A simple graphql server that displays DnD information including character data, classes, races, and equipment.

## Getting Started

***Environment Variables***
Use the `.env.example` file as a basis for your environment variables.
Simply copy the `.env.example` to `.env` and replace the temporary variables with
actual values.

```
yarn install
yarn start
```

Application should be accessible at `localhost:[PORT FROM .env]/graphiql`

For information on how to query graphql servers, use the [Graphql Learn Documentation](http://graphql.org/learn/) for information.

## Credits
Uses DnD Api developed by [Adrian Padua](https://github.com/adrpadua).
