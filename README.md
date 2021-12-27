# playable-factory
Generate fake data and save db with multiple nest service

## After clone the project;
We need to docker build projects.

$ cd fake-data-generator-service

$ docker build -t nestjs .

$ cd fake-data-generator-service

$ docker build -t data-generator .

## After docker build, we raise the projects with docker-compose up.
$ cd playable-factory

$ docker compose up -d

## Project work
The fake-data-generator-service project is running on port 3000.
When you send a post request to the url, the message will be forwarded to queue. And this message will be forwarded to nestjs-service project.
  http://localhost:3000/api/v1/products

When a message is received from the queue to nestjs-service, the incoming data is added to the product collection.
You can see the properties of the added data in two ways.

1- View all added products by sending a get request to the url.
  http://localhost:8000/api/v1/products

2- Connecting to the url with mongodb sh and displaying the db
  mongodb+srv://taylan:asd123@cluster0.ojqk4.mongodb.net/test?authSource=admin
