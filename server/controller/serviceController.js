const Service = require('../models/serviceModel');

const addService = async (req, res) => {
    try {
        const { name } = req.body;
        
        if (!name) {
            return res.status(400).json({ message: 'Service name is required' });
        }

        const service = new Service({ name });
        await service.save();

        res.status(201).json({
            message: 'Service added successfully',
            service
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const getAllServices = async (req, res) => {
    try {
        const services = await Service.find().sort({ createdAt: -1 });
        res.status(200).json({ services });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


const getServiceById = async (req, res) => {
    try {
        const { id } = req.params;
        const service = await Service.findById(id);
        
        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }

        res.status(200).json({ service });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

 const editService = async (req, res) => {
    try {
        const { _id, name } = req.body;
        
        if (!_id || !name) {
            return res.status(400).json({ message: 'Service ID and name are required' });
        }

        const service = await Service.findByIdAndUpdate(
            _id,
            { name },
            { new: true, runValidators: true }
        );

        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }

        res.status(200).json({
            message: 'Service updated successfully',
            service
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

 const deleteService = async (req, res) => {
    try {
        const { _id } = req.body;
        
        if (!_id) {
            return res.status(400).json({ message: 'Service ID is required' });
        }

        const service = await Service.findByIdAndDelete(_id);

        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }

        res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = {
    addService,
    getAllServices,
    getServiceById,
    editService,
    deleteService
};