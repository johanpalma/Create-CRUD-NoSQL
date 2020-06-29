const ShipmentModel = require('../models/shipment.model');

function saveShipment(req, res) {
    const shipment = new ShipmentModel(req.body);

    shipment.save((err, ShipmentStored) => {
        if (err) { 
            return res.status(500).json({
                message: 'shipment no save'
            }); 
        } else {
            return res.status(200).json({
                message: ShipmentStored
            });
        }
    })
}

function getShipments(req, res) {
    ShipmentModel.find().populate('carrier_id').exec((err, shipmentData) => {
        if (err) return res.status(500).json({ message: 'Error in get to data' });
  
        return res.json({shipmentData});
      });
}

function getShipmentById(req, res) {
    const { id } = req.params;
    ShipmentModel.findById(id).populate('carrier_id').exec((err, shipmentData) => {
        if (err) return res.status(500).json({ message: 'Error in get to data' });

        return res.json({ shipmentData });
    })
}

function deleteShipment(req, res) {
    const { id } = req.params;
    ShipmentModel.find({'_id': id}).remove(err => {
        if (err) return res.status(500).json({error: 'data no delete'});

        return res.json({data: 'data delete'});
    })
}

function updateShipment(req, res) {
    const { id } = req.params;
    const dataUpdate = req.body;
    ShipmentModel.findByIdAndUpdate(id, dataUpdate, {new: true}, (err, shipmentUpdated) => {
        if(err) return res.status(500).json({ error: 'Error in the request' });

        if (!shipmentUpdated) return res.status(500).json({ message: 'Shipment no updated' });

        res.status(200).json({ shipmentUpdated });
    })
}

module.exports = {
    saveShipment,
    getShipments,
    getShipmentById,
    deleteShipment,
    updateShipment
}