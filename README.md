# Authentication Microservices (WIP)

Trying to setup authentication microservices with the ORY suite, using:
- Kratos to handle authentication.
- Oathkeeper as a route decision engine.
- Traefik as a reverse proxy and load balancer.

Since we are 2 experienced developers working on this project, we absolutely
know what we are doing and do not need any help whatsoever. *(Just kidding, we
are dead lost and need all the guidance possible)*.

## Documentation
- [Oathkeeper documentation](https://www.ory.sh/docs/oathkeeper)
- [Kratos documentation](https://www.ory.sh/docs/kratos)

## Status

Traefik is now proxy'ing requests to the Kratos and kratos-ui containers based
on the rules of the Oathkeeper decision engine. The next step is to deploy our
own kratos-ui instance.
