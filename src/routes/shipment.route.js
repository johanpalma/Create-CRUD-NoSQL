const { Router } = require('express');
const router = Router();

const { deleteShipment, getShipments, getShipmentById,
        saveShipment, updateShipment } = require('../controllers/shipment.controller');


 /**
 * @swagger
 * definition:
 *   error:
 *     properties:
 *       statusCode:
 *         type: integer
 *         format: int32
 *         default: 400
 *       message:
 *         type: string
 *       error:
 *         type: string
 *   success:
 *     properties:
 *      statusCode:
 *       type: integer
 *       format: int32
 *       default: 200
 *     message: 
 *       type: string
 *     data: 
 *      type: object
 * 
 *   shipment: 
 *    properties:
 *     id:
 *      type: String
 *     carrier_id:
 *      type: String
 *     origin_country:
 *      type: String
 *     origin_state:
 *      type: String
 *     origin_city:
 *      type: String
 *     destination_country:
 *      type: String
 *     destination_state:
 *      type: String
 *     destination_city:
 *      type: String
 *     pickup_date: 
 *      type: Date
 *     delivery_date: 
 *      type: Date
 *     status:
 *      type: String
 *     carrier_rate:
 *      type: Float
 */    

 
/**
 * @swagger
 * /create_shipment:
 *  post:
 *    description: Use to request create shipment
 *    consumes:
 *     - application/json
 *    produces:
 *     - application/json
 *    parameters:
 *     - name: carrier_id
 *       in: formData
 *       type: string
 *       format: string
 *       require: true
 *     - name: origin_country
 *       in: formData
 *       type: string
 *       format: string
 *       require: true
 *     - name: origin_state
 *       in: formData
 *       type: string
 *       format: string
 *       require: true
 *     - name: origin_city
 *       in: formData
 *       type: string
 *       format: string
 *       require: true
 *     - name: destination_country
 *       in: formData
 *       type: string
 *       format: string
 *       require: true
 *     - name: destination_state
 *       in: formData
 *       type: string
 *       format: string
 *       require: true
 *     - name: destination_city
 *       in: formData
 *       type: string
 *       format: string
 *       require: true
 *     - name: pickup_date
 *       in: formData
 *       type: date
 *       format: date
 *       require: false
 *     - name: delivery_date
 *       in: formData
 *       type: date
 *       format: date
 *       require: false
 *     - name: status
 *       in: formData
 *       type: string
 *       format: string
 *       require: true
 *     - name: carrier_rate
 *       in: formData
 *       type: float
 *       format: float
 *       require: true
 *    responses:
 *      400:
 *       description: invalid request
 *       schema:
 *        $ref: '#definitions/error'
 *      200: 
 *       description: Shipment create successfully
 *       schema:
 *        $ref: '#definitions/success'
 */
router.post('/create_shipment', saveShipment);

/**
 * @swagger
 * /get_shipments:
 *  get:
 *    description: Use to request get all shipments
 *    consumes:
 *     - application/json
 *    produces:
 *     - application/json
 *    parameters:
 *    responses:
 *      400:
 *       description: invalid request
 *       schema:
 *        $ref: '#definitions/error'
 *      200: 
 *       description: Get all shipments successfully
 *       schema:
 *        $ref: '#definitions/shipment'
 */
router.get('/get_shipments', getShipments);

/**
 * @swagger
 * /get_shipment:
 *  get:
 *    description: Use to request get shipments by id
 *    consumes:
 *     - application/json
 *    produces:
 *     - application/json
 *    parameters:
 *     - name: id
 *       in: formData
 *       type: int
 *       format: int32
 *       require: true
 *    responses:
 *      400:
 *       description: invalid request
 *       schema:
 *        $ref: '#definitions/error'
 *      200: 
 *       description: Get shipment successfully
 *       schema:
 *        $ref: '#definitions/shipment'
 */
router.get('/get_shipment/:id', getShipmentById);

/**
 * @swagger
 * /update_shipment:
 *  put:
 *    description: Use to request update shipment
 *    consumes:
 *     - application/json
 *    produces:
 *     - application/json
 *    parameters:
 *     - name: id
 *       in: formData
 *       type: string
 *       format: string
 *       require: true
 *     - name: carrier_id
 *       in: formData
 *       type: string
 *       format: string
 *       require: true
 *     - name: origin_country
 *       in: formData
 *       type: string
 *       format: string
 *       require: true
 *     - name: origin_state
 *       in: formData
 *       type: string
 *       format: string
 *       require: true
 *     - name: origin_city
 *       in: formData
 *       type: string
 *       format: string
 *       require: true
 *     - name: destination_country
 *       in: formData
 *       type: string
 *       format: string
 *       require: true
 *     - name: destination_state
 *       in: formData
 *       type: string
 *       format: string
 *       require: true
 *     - name: destination_city
 *       in: formData
 *       type: string
 *       format: string
 *       require: true
 *     - name: pickup_date
 *       in: formData
 *       type: date
 *       format: date
 *       require: false
 *     - name: delivery_date
 *       in: formData
 *       type: date
 *       format: date
 *       require: false
 *     - name: status
 *       in: formData
 *       type: string
 *       format: string
 *       require: true
 *     - name: carrier_rate
 *       in: formData
 *       type: float
 *       format: float
 *       require: true
 *    responses:
 *      400:
 *       description: invalid request
 *       schema:
 *        $ref: '#definitions/error'
 *      200: 
 *       description: Update shipment successfully
 *       schema:
 *        $ref: '#definitions/success'
 */
router.put('/update_shipment/:id', updateShipment);

/**
 * @swagger
 * /delete_shipment:
 *  delete:
 *    description: Use to request delete shipment
 *    consumes:
 *     - application/json
 *    produces:
 *     - application/json
 *    parameters:
 *     - name: id
 *       in: formData
 *       type: int
 *       format: int32
 *       require: true
 *    responses:
 *      400:
 *       description: invalid request
 *       schema:
 *        $ref: '#definitions/error'
 *      200: 
 *       description: Delete shipment successfully
 *       schema:
 *        $ref: '#definitions/success'
 */
router.delete('/delete_shipment/:id', deleteShipment);

module.exports = router;