const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
// routes
const commandeRoutes = require('./routes/commandeRoutes');
const homeRoutes = require('./routes/homeRoutes');
const clientRoutes = require('./routes/clientRoutes');
const { stringify } = require('querystring');
// express app
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// register view engine
app.set('view engine', 'ejs');
// client routes
app.use('/', homeRoutes);
// // commande routes
app.use('/commandes', commandeRoutes);
// // client commande routes
app.use('/clients', clientRoutes);


// listen to server
app.listen(8080, () => {
    console.log("listenning at port 8080")
})