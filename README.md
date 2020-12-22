# nestjs-swagger with reverse proxy

Tried to replicate the AWS gateway using nginx as reverse proxy. 

## Working
Exposes nestjs with a global prefix `nest/global/prefix` and use this global prefix and expose it on `/docs`. The reverse proxy adds an extra `reverse-proxy-prefix` in front, we do not control the proxy, it is configured in `nginx.conf` in the `nginx` directory but in production by a third party. The playground should respect the prefixes of the reverse proxy and the global prefixes.

So the endpoint is `reverse-proxy-prefix/nest/global/prefix/docs`. 

### Start

```bash
docker-compose up -d
```

### Opening OpenAPI
Open `http://localhost:8080/reverse-proxy-prefix/nest/global/prefix/docs` in the browser to access swagger interface. This all works fine, untill you try out to make a request. It then suddenly does not respect the `reverse-proxy-prefix` and thus results in a `404`.

