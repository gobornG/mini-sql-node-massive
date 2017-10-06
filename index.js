const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()
const controller = require('./controller');

const app = express();
massive( process.env.CONNECTION_STRING ).then( dbInstance => {
  app.set('db', dbInstance);

});

app.use( bodyParser.json() );
app.use( cors() );

app.get('/api/planes/:id', controller.getPlane);
app.get('/api/planes', controller.getPlanes);
app.post('/api/post/plane', controller.postPlane);

const port = process.env.PORT || 3000
app.listen(port, () => { console.log(`Server listening on port ${port}`) } )