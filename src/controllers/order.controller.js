const  db = require('../db/db-connection');
const collection = "orders";
const Joi = require('joi');
const OrderModel = require('../models/order.model');

function saveOrder(req, res, next) {
    const NewOrder = req.body;

    Joi.validate(NewOrder, OrderModel, async (err, result) =>{
        if (err) {
            const error = new Error('Invalid object Order');
            error.status = 400;
            res.status(400).json({
                message: 'Invalid object order'
            });
            next(error);
        } else {
            await db.getDB().collection(collection).insertOne(NewOrder, (err, OrderStored) => {
                if (err) { 
                    return res.status(500).json({
                        message: 'Order no save'
                    }); 
                } else {
                    return res.status(200).json({
                        data: OrderStored.ops[0],
                        message: 'successfully insert order',
                        error: null
                    });
                }
            })
        }
    });
}

async function getOrders(req, res) {
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

async function getOrderById(req, res) {
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

async function deleteOrder(req, res) {
    const { id } = req.params;
    await db.getDB().collection(collection).findOneAndDelete({ _id: db.getPrimaryKey(id) }, (err, data) => {
        if (err) return res.status(500).json({error: 'data no delete'});

        return res.json({
            message: 'data delete',
            data
        });
    });
}

async function updateOrder(req, res) {
    const { id } = req.params;
    const dataUpdate = req.body;
    await db.getDB().collection(collection).findOneAndUpdate({ _id: db.getPrimaryKey(id) }, { $set: dataUpdate }, { returnOriginal: false }, (err, data) => {
        if(err) return res.status(500).json({ error: 'Error in the request' });

        if (!data) return res.status(500).json({ message: 'Order no updated' });

        res.status(200).json({ data });
    });
}

module.exports = {
    saveOrder,
    getOrders,
    getOrderById,
    deleteOrder,
    updateOrder,
}