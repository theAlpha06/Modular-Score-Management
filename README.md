# [Setup Instructions](https://github.com/theAlpha06/Modular-Score-Management)

Follow these instructions to set up the Modular Player Score Management System on your local machine using Node.js and Docker.

## Prerequisites

- Node.js and npm installed on your system.
- Docker installed on your system.
- MongoDB Compass(optional)

## Setup Steps

### 1. Clone the Repository

```bash
git clone https://github.com/theAlpha06/Modular-Score-Management
```

```bash
cd Modular-Score-Management
```

### 2. Run Docker Images
```bash
docker-compose up
```

### 3. Stop the container
```bash
docker-compose down
```

### 4. Use either of the connection string to connect to the local database. You can also use MongoDB Compass for GUI.
```bash
mongodb://localhost:27017/modulePlayer
``` 
```bash
mongodb://127.0.0.1:27017/modulePlayer
```

### 5. Now you are ready to make requests. Below are the api endpoints.

| Method | Endpoint                                | Request Body                                      | CURL Command                                           |
|--------|-----------------------------------------|---------------------------------------------------|--------------------------------------------------------|
| POST   | http://localhost:3000/players           | {"id": "1","name": "Shubham Singh","country": "IN","score": 100} | ```curl -X POST -H "Content-Type: application/json" -d '{"id": "1","name": "Shubham Singh","country": "IN","score": 100}' http://localhost:3000/players``` |
| PUT    | http://localhost:3000/players/:id       | {"name": "Sunny Singh","score": 150}               | ```curl -X PUT -H "Content-Type: application/json" -d '{"name": "Sunny Singh","score": 150}' http://localhost:3000/players/:id``` |
| DELETE | http://localhost:3000/players/:id       |                                                   | ```curl -X DELETE http://localhost:3000/players/:id``` |
| GET    | http://localhost:3000/players           |                                                   | ```curl http://localhost:3000/players```                |
| GET    | http://localhost:3000/players/rank/:val |                                                   | ```curl http://localhost:3000/players/rank/:val```      |
| GET    | http://localhost:3000/players/random    |                                                   | ```curl http://localhost:3000/players/random```         |
