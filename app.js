const connectionDataBase = require('./config/connection');
const userController = require('./controller/userController');
const express = require('express');
const routes = require('./router/router');
const app = express();
const port = 3003;
app.use(express.json(), routes);
app.listen(port, () => { console.log(`Run server...${port}`) });

app.get('/', (req,res) => res.send("API-USER"));

app.post('/user', userController.createUser);

app.get('/user',  userController.findUser);


