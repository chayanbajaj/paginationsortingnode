const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost/paginationsorting', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('error', console.error.bind(console, 'MongoDb connect error'));

app.use(bodyParser.json());

const itemRoutes = require('./routes/items');
app.use('/items', itemRoutes);

app.listen(PORT, () => {
    console.log(`server is running on localhost:${PORT}`)
});