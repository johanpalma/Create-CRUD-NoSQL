const {  Router } = require('express');
const router = Router();
const { saveCarrier, getCarriers, getCarrierById,
        deleteCarrier, updateCarrier } = require('../controllers/carrier.controller');


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
 *       statusCode:
 *         type: integer
 *         format: int32
 *         default: 200
 *     message: 
 *       type: string
 *     data: 
 *      type: object
 * 
 *   carrier: 
 *    properties:
 *     id:
 *      type: string
 *     name:
 *      type: string
 *     scac:
 *      type: string
 *     mc:
 *      type: int
 *     dot:
 *      type: int
 *     fein:
 *      type: string
 */        

/**
 * @swagger
 * /create_carrier:
 *  post:
 *    description: Use to request create carrier
 *    consumes:
 *     - application/json
 *    produces:
 *     - application/json
 *    parameters:
 *     - name: name
 *       in: formData
 *       type: string
 *       format: string
 *       require: true
 *     - name: scac
 *       in: formData
 *       type: string
 *       format: string
 *       require: true
 *     - name: mc
 *       in: formData
 *       type: int
 *       format: int32
 *       require: false
 *     - name: dot
 *       in: formData
 *       type: int
 *       format: int32
 *       require: false
 *     - name: fein
 *       in: formData
 *       type: string
 *       format: string
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
router.post('/create_carrier', saveCarrier);

/**
 * @swagger
 * /get_carriers:
 *  get:
 *    description: Use to request get all carrier
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
 *       description: Get all carriers successfully
 *       schema:
 *        $ref: '#definitions/carrier'
 */
router.get('/get_carriers', getCarriers);

/**
 * @swagger
 * /get_carrier:
 *  get:
 *    description: Use to request get carrier by id
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
 *       description: Get carrier successfully
 *       schema:
 *        $ref: '#definitions/carrier'
 */
router.get('/get_carrier/:id', getCarrierById);

/**
 * @swagger
 * /update_carrier:
 *  put:
 *    description: Use to request update carrier
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
 *     - name: name
 *       in: formData
 *       type: string
 *       format: string
 *       require: false
 *     - name: scac
 *       in: formData
 *       type: string
 *       format: string
 *       require: false
 *     - name: mc
 *       in: formData
 *       type: int
 *       format: int32
 *       require: false
 *     - name: dot
 *       in: formData
 *       type: int
 *       format: int32
 *       require: false
 *     - name: fein
 *       in: formData
 *       type: string
 *       format: string
 *       require: false
 *    responses:
 *      400:
 *       description: invalid request
 *       schema:
 *        $ref: '#definitions/error'
 *      200: 
 *       description: Update carrier successfully
 *       schema:
 *        $ref: '#definitions/success'
 */
router.put('/update_carrier/:id', updateCarrier);

/**
 * @swagger
 * /delete_carrier:
 *  delete:
 *    description: Use to request delete carrier
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
 *       description: Delete carrier successfully
 *       schema:
 *        $ref: '#definitions/success'
 */
router.delete('/delete_carrier/:id', deleteCarrier);

module.exports = router;