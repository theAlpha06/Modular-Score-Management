# [Setup Instructions](https://github.com/theAlpha06/Modular-Score-Management)

Follow these instructions to set up the Modular Player Score Management System on your local machine using Node.js and Docker.

## Prerequisites

- Node.js and npm installed on your system.
- Docker installed on your system.

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

### 4. Open MongoDB Compass and establish the connection.(You can also use terminal)

### 5. Now you are ready to make requests. Below are the api endpoints.

| Method | Endpoint                          | Request Body |
|--------|-----------------------------------|--------------|
| POST   | http://localhost:3000/players     | {"ID": "1","Name": "Shubham Singh","Country": "IN","Score": 100} |
| PUT    | http://localhost:3000/players/:id | {"Name": "Sunny Singh","Score": 150}        |
| DELETE | http://localhost:3000/players/:id | |
| GET    | http://localhost:3000/players     |              |
| GET    | http://localhost:3000/players/rank/:val| |
| GET    | http://localhost:3000/players/random | |