# User Lookup

## User by ID

```shell
curl -X GET https://wakandaplus.wakanda-labs.com/1/users/:id \
  -H 'Authorization: Bearer <token>'
```

## Users by ID

```shell
curl -X GET https://wakandaplus.wakanda-labs.com/1/users \
  -H 'Authorization: Bearer <token>' \
  -d 'ids=1,2,3'
```

## User by telegram id

```shell
curl -X GET https://wakandaplus.wakanda-labs.com/1/users/telegram/:id \
  -H 'Authorization: Bearer <token>'
```

## User by discord id

```shell
curl -X GET https://wakandaplus.wakanda-labs.com/1/users/discord/:id \
  -H 'Authorization: Bearer <token>'
```

## User by email

```shell
curl -X GET https://wakandaplus.wakanda-labs.com/1/users/email/:email \
  -H 'Authorization: Bearer <token>'
```

