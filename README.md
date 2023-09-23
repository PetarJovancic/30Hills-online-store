# 30Hills eCommerce Platform

<img src="https://img.icons8.com/fluency/50/000000/node-js.png"/></span>
&nbsp;&nbsp;&nbsp;
<img src="https://img.icons8.com/color/48/000000/javascript--v1.png"
/>&nbsp;&nbsp;&nbsp;
<img src="https://img.icons8.com/color/50/000000/mongodb.png"/></span>
&nbsp;&nbsp;&nbsp;
<img src="https://img.icons8.com/fluency/48/000000/docker.png"/></span>
&nbsp;&nbsp;&nbsp;
<img src="https://img.icons8.com/ultraviolet/80/000000/react--v1.png"
     height="50px"
/></span>
&nbsp;&nbsp;&nbsp;
<img src="https://img.icons8.com/color/48/000000/javascript--v1.png"
/>&nbsp;&nbsp;&nbsp;

> eCommerce platform built with the MERN stack.

## Usage

- Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)

### Env Variables

Rename the `.env.example` file to `.env` and add the following

```
PORT=<port>
MONGO_URI=<mongodb_uri>
PAGINATION_LIMIT=<integer>
NODE_ENV=development
DATASET_URL=https://30hills.com/api/products.json
```

Change the PAGINATION_LIMIT to what you want

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```

# Run frontend (:3000) & backend (:5050)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Seed Database

You can use the following commands to seed the database with dummy data or data fetched from DATASET_URL as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

### Run Using Docker

There are three separate Docker containers,
One for hosting the mongodb database, second one for backend service and third for the frontend.

To build and run containers execute:

```
docker-compose up --build --remove-orphans
```
