# api-server# basic-api-server

## API Feature

- All the Data stored in MONGODB with collection of food and clothes in **Atlas**

- Get all data realted to food or clothes in the routes `/food`, `/clothe`.

- Get a certain data about food or clothes in the routes `/food/:id`, `/clothes/:id`.

- Add data related to food or clothes in the routes `/food`, `/clothes`.

- Upgrade existing data related to food or clothes `/food/:id`, `/clothes/:id` and send new data to this routes.

- Delete existing data realted to food or clothes `/food/:id`, `/clothes/:id`.

_all feature have been implemented in the `dev` branch_

## URL links

- main branch
  [oht-api-server-lab04](https://oht-api-server-lab04.herokuapp.com/)

- Github Pull Request
  [Pull-Request](https://github.com/Omar-Tarawneh/api-server/pull/1)

- Action
  [Action](https://github.com/Omar-Tarawneh/api-server/actions)

## Feature tests

you can check from the action tap for all the test - the link provided above- or just test it in you local machine the final resulte is like this.

![data-flow-diagram](img/testing-lab04.png)

## Data Flow Diagram

![data-flow-diagram](img/lab03.png)

## Download And Start

- Clone the Repository into your local machine
  `git clone httpLink/sshlink`

- Get into the repo directory
  `cd basic-api-server`

- Install the dependences for tha app
  `npm install`

- Add your dotenv File and add your PORT
  `touch .env`
  `PORT=3000`
  `MONGODB_URI=mongodb+srv://omar:0000@api-server.xifht.mongodb.net/api-server-db?retryWrites=true&w=majorit`

- Test the functionality of the app by typing:
  `npm test`

- Then to start the server type in the terminal:
  `npm start`
