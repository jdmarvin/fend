const dotenv = require('dotenv');
dotenv.config();

projectData = {}

var path = require('path')
const express = require('express')

const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

const mockAPIResponse = require('./mockAPI.js')

var aylien = require("aylien_textapi")

// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  })

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.post('/add', function (req, res) {
    const dataURL = {};
    dataURL.url = req.body.formURL;
    projectData = dataURL;
    getData(req, res)
})

function getData(req, res) {
  textapi.classify({
      url: projectData.url
  }, function(error, response) {
      console.log(response)  
      res.send(response);
      });
}

app.use(function (req, res, next) {
    next();
  });