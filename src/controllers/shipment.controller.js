const  db = require('../db/db-connection');
const collection = "shipments";
const Joi = require('joi');
const ShipmentModel = require('../models/shipment.model');

async function saveShipment(req, res) {
    const NewShipment = req.body;

    Joi.validate(NewShipment, ShipmentModel, async (err, result) => {
        if (err) {
            const error = new Error('Invalid object Shipment');
            error.status = 400;
            res.status(400).json({
                message: 'Invalid object Shipment'
            });
        } else {
            await db.getDB().collection(collection).insertOne(NewShipment, (err, ShipmentStored) => {
                if (err) { 
                    return res.status(500).json({
                        message: 'shipment no save'
                    }); 
                } else {
                    return res.status(200).json({
                        data: ShipmentStored.ops[0],
                        message: 'successfully insert shipment',
                        error: null
                    });
                }
            })
        }
    });
}

async function getShipments(req, res) {
    await db.getDB().collection(collection).aggregate([{ $lookup: {
        from: 'carriers',
        localField: 'carrier_id',
        foreignField: '_id',
        as: 'carrier'
    }}]).toArray((err, data) => {
        if (err) return res.status(500).json({ message: 'Error in get to data' });

        return res.json({ data });
    })
}

async function getShipmentById(req, res) {
    const { id } = req.params;
    await db.getDB().collection(collection).aggregate([{ $lookup: {
        from: 'carriers',
        localField: 'carrier_id',
        foreignField: '_id',
        as: 'carrier'
    }}]).toArray((err, orderData) => {
        if (err) return res.status(500).json({ message: 'Error in get to data' });

        let data =  orderData.find(index => index._id = id);

        return res.json({ data });
    });
}

async function deleteShipment(req, res) {
    const { id } = req.params;
    await db.getDB().collection(collection).findOneAndDelete({ _id: db.getPrimaryKey(id) }, (err, data) => {
        if (err) return res.status(500).json({error: 'data no delete'});

        return res.json({
            message: 'data delete',
            data
        });
    });
}

async function updateShipment(req, res) {
    const { id } = req.params;
    const dataUpdate = req.body;
    await db.getDB().collection(collection).findOneAndUpdate({ _id: db.getPrimaryKey(id) }, { $set: dataUpdate }, { returnOriginal: false }, (err, data) => {
        console.log(err);
        
        if(err) return res.status(500).json({ error: 'Error in the request' });

        if (!data) return res.status(500).json({ message: 'Order no updated' });

        res.status(200).json({ data });
    });
}

module.exports = {
    saveShipment,
    getShipments,
    getShipmentById,
    deleteShipment,
    updateShipment
}