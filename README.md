# Full Stack Docker

## Multi-core Node / GraphQL / Hapi / React / Postgres running in Docker

This repository is a launching off point for a full stack React, GraphQL / Hapi, Node, and Postgres app, running in Docker containers.

## Start

To get started, download Docker, cd into the root directory, and

```
docker-compose up
```

## Node

Node's Cluster module spins up one Hapi server for every CPU core on the host machine, for increased performance and load handling.

## React

A create-react-app scaffold is running in its own container, and will proxy all unknown routes to the API container through the proxy option in the package.json.

## GraphQL / Hapi

Any request made to `/graphql` with be proxied to the Node container, and served by Hapi. Example sign-in, sign-up, and listAllUsers queries and mutations provided. For example:

```
query listAllUsers {
  listAllUsers {
    first_name,
    last_name,
    email,
    id
  }
}
```

```
query signIn($email:String!, $password:String!){
  signIn(user:{email: $email, password:$password}){
    result,
    id
  }
}

query variables:

{
  "email": "friskydingo@gmail.com",
  "password": "awesomex"
}
```

## Postgres

Postgres integration happens through Knex, a query builder, and Objection, an ORM. A preconfigured connection can be found in api/src/lib
