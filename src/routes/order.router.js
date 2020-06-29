const { Router } = require('express');
const router = Router();

const { deleteOrder, getOrderById, getOrders,
        saveOrder, updateOrder } = require('../controllers/order.controller');


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
 *   order: 
 *    properties:
 *     id:
 *      in: formData
 *      type: string
 *      format: string
 *     carrier_id:
 *      in: formData
 *      type: string
 *      format: string
 *     provider:
 *      type: string
 *     address:
 *      type: string
 *     phone:
 *      type: string
 *     description_order:
 *      type: string
 *     quantity:
 *      type: int
 *     unit_price:
 *      type: int
 *     total_price: 
 *      type: int
 *     delivery_date:
 *      type: date
 */

 /**
 * @swagger
 * /create_order:
 *  post:
 *    description: Use to request create order
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
 *     - name: provider
 *       in: formData
 *       type: string
 *       format: string
 *       require: true
 *     - name: address
 *       in: formData
 *       type: string
 *       format: string
 *       require: true
 *     - name: phone
 *       in: formData
 *       type: string
 *       format: string
 *       require: false
 *     - name: description_order
 *       in: formData
 *       type: string
 *       format: string
 *       require: false
 *     - name: quantity
 *       in: formData
 *       type: int
 *       format: int32
 *       require: false
 *     - name: unit_price
 *       in: formData
 *       type: int
 *       format: int32
 *       require: false
 *     - name: total_price
 *       in: formData
 *       type: int
 *       format: int32
 *       require: false
 *     - name: delivery_date
 *       in: formData
 *       type: date
 *       format: date
 *       require: false
 *    responses:
 *      400:
 *       description: invalid request
 *       schema:
 *        $ref: '#definitions/error'
 *      200: 
 *       description: Carrier create successfully
 *       schema:
 *        $ref: '#definitions/success'
 */
router.post('/create_order', saveOrder);

/**
 * @swagger
 * /get_orders:
 *  get:
 *    description: Use to request get all orders
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
 *       description: Get all orders successfully
 *       schema:
 *        $ref: '#definitions/order'
 */
router.get('/get_orders', getOrders);

/**
 * @swagger
 * /get_order:
 *  get:
 *    description: Use to request get order by id
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
 *       description: Get order successfully
 *       schema:
 *        $ref: '#definitions/order'
 */
router.get('/get_order/:id', getOrderById);

/**
 * @swagger
 * /get_order:
 *  get:
 *    description: Use to request get order by id
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
 *       description: Get order successfully
 *       schema:
 *        $ref: '#definitions/order'
 */
router.get('/get_order/:id', getOrderById);

/**
 * @swagger
 * /update_order:
 *  put:
 *    description: Use to request update order
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
 *     - name: carrier_id
 *       in: formData
 *       type: string
 *       format: string
 *       require: true
 *     - name: provider
 *       in: formData
 *       type: string
 *       format: string
 *       require: true
 *     - name: address
 *       in: formData
 *       type: string
 *       format: string
 *       require: true
 *     - name: phone
 *       in: formData
 *       type: string
 *       format: string
 *       require: false
 *     - name: description_order
 *       in: formData
 *       type: string
 *       format: string
 *       require: false
 *     - name: quantity
 *       in: formData
 *       type: int
 *       format: int32
 *       require: false
 *     - name: unit_price
 *       in: formData
 *       type: int
 *       format: int32
 *       require: false
 *     - name: total_price
 *       in: formData
 *       type: int
 *       format: int32
 *       require: false
 *     - name: delivery_date
 *       in: formData
 *       type: date
 *       format: date
 *       require: false
 *    responses:
 *      400:
 *       description: invalid request
 *       schema:
 *        $ref: '#definitions/error'
 *      200: 
 *       description: Update order successfully
 *       schema:
 *        $ref: '#definitions/success'
 */
router.put('/update_order/:id', updateOrder);

/**
 * @swagger
 * /delete_order:
 *  delete:
 *    description: Use to request delete order
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
 *       description: Delete order successfully
 *       schema:
 *        $ref: '#definitions/success'
 */
router.delete('/delete_order/:id', deleteOrder);

module.exports = router;