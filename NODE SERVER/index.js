const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');


//DB SETUP
mongoose.connect('mongodb://127.0.0.1:27017/reactapp');

//APP SETUP
app.use(morgan('combined'));
app.use(bodyParser.json({type  : '*/*'}));
app.use(cors());
router(app);



//SERVER SETUP
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log('Server is running on PORT ', port);