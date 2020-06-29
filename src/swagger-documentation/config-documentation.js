const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require('path')
// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "Shipment API",
        description: "Shipments API Information",
        contact: {
          name: "Johan Palma"
        },
        servers: ["http://localhost:4000"]
      }
    },
    // ['.routes/*.js']
    apis: [path.join(__dirname, '../routes/*.js')]
  };
  
const specs = swaggerJsDoc(swaggerOptions);
module.exports = (app) =>{
  app.use('/sql/index', swaggerUi.serve, swaggerUi.setup(specs));
  app.use((err, req, res, next) =>{
    if (err.isBoom) {
      return res.status(err.output.statusCode).json(err.output.payload);
    }
  })
};