
## Installation
npm packages install
  $ yarn install

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev
# this command runs on port 8000.

# production mode
$ yarn run listen
#this command is required to establish connection with other service.
```

## Description
Simple API operations can be done using this service.

When a get request is made to this url, all products are returned.
  http://localhost:8000/api/v1/products

When a get request is sent to this url, the product with the desired id is returned.
   http://localhost:8000/api/v1/products/{id}

When a post request is made to this url, the product can be created.
  http://localhost:8000/api/v1/products/

If a delete request is sent to this url, the product can be deleted.
  http://localhost:8000/api/v1/products/{id}
