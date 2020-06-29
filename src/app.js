const express = require('express');
const morgan = require('morgan');
const app = express();

// Imports Routes
const carrierRoutes = require('./routes/carrier.route');
const shipmentRoutes = require('./routes/shipment.route');
const orderRoutes = require('./routes/order.router');


// Middleware
app.use(express.json());
app.use(morgan('dev'));

// use routes
app.use('/nosql/carrier', carrierRoutes);
app.use('/nosql/shipment', shipmentRoutes);
app.use('/nosql/order', orderRoutes);

// Swagger documentation
require('./swagger-documentation/config-documentation')(app);

module.exports = app