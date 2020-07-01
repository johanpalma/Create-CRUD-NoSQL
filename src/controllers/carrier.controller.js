const  db = require('../db/db-connection');
const collection = "carriers";
const CarrierModel = require('../models/carrier.model');
const Joi = require('joi');

function saveCarrier(req, res, next) {
    const NewCarrier = req.body;

    Joi.validate(NewCarrier, CarrierModel, async (err, result) => {
        if (err) {
            const error = new Error('Invalid object carrier');
            error.status = 400;
            res.status(400).json({
                message: 'Invalid object carrier'
            })
            next(error);
        } else {
            await db.getDB().collection(collection).insertOne(NewCarrier, (err, CarrierStored) => {
                if (err) { 
                    return res.status(500).json({
                        message: 'Carrier no save'
                    }); 
                } else {
                    return res.status(200).json({
                        data: CarrierStored.ops[0],
                        message: 'successfully insert carrier',
                        error: null 
                    });
                }
            });
        }
    });
}

async function getCarriers(req, res) {
    await db.getDB().collection(collection).find({}).toArray((err, data) => {
        if (err) return res.status(500).json({ message: 'Error in get to data' });

        return res.json({ data });
    });
}

async function getCarrierById(req, res) {
    const { id } = req.params;    
    await db.getDB().collection(collection).find({}).toArray((err, carrierData) => {
        if (err) return res.status(500).json({ message: 'Error in get to data' });

        let data =  carrierData.find(index => index._id = id);

        return res.json({ data });
    });
}

async function deleteCarrier(req, res) {
    const { id } = req.params;

    await db.getDB().collection(collection).findOneAndDelete({ _id: db.getPrimaryKey(id) }, (err, data) => {
        if (err) return res.status(500).json({error: 'data no delete'});

        return res.json({
            message: 'data delete',
            data
        });
    });
}

async function updateCarrier(req, res) {
    const { id } = req.params;
    const { name, scac, mc, dot, fein } = req.body;
    
    await db.getDB().collection(collection).findOneAndUpdate({ _id: db.getPrimaryKey(id) }, { $set: { name, scac, mc, dot, fein  } }, { returnOriginal: false }, (err, data) => {
        if(err) return res.status(500).json({ error: 'Error in the request' });

        if (!data) return res.status(500).json({ message: 'Carrier no updated' });

        res.status(200).json({ data });
    });
}

module.exports = {
    saveCarrier,
    getCarriers,
    getCarrierById,
    deleteCarrier,
    updateCarrier
}