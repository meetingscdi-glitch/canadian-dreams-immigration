const SubService = require('../models/subServiceModel');

// Add new sub-service
const addSubService = async (req, res) => {
    try {
        let {
            serviceCategoryId,
            name,
            image,
            headerOne,
            SubHeaderTwo,
            paragraphOne,
            headerThree,
            SubHeaderThree,
            paragraphTwo,
            headerFour,
            SubHeaderFour,
            paragraphThree,
            headerFive,
            SubHeaderFive,
            paragraphFour,
            headerSix,
            SubHeaderSix,
            paragraphFive,
            headerSeven,
            SubHeaderSeven,
            paragraphSix
        } = req.body;

        if (!serviceCategoryId || !name) {
            return res.status(400).json({ message: 'Service category ID and name are required' });
        }

        // Handle file upload or URL
        if (req.file) {
            image = `http://localhost:3500/uploads/${req.file.filename}`;
        } else if (req.body.imageUrl) {
            image = req.body.imageUrl;
        }

        const subService = new SubService({
            serviceCategoryId,
            name,
            image,
            headerOne,
            SubHeaderTwo,
            paragraphOne,
            headerThree,
            SubHeaderThree,
            paragraphTwo,
            headerFour,
            SubHeaderFour,
            paragraphThree,
            headerFive,
            SubHeaderFive,
            paragraphFour,
            headerSix,
            SubHeaderSix,
            paragraphFive,
            headerSeven,
            SubHeaderSeven,
            paragraphSix
        });

        await subService.save();

        res.status(201).json({
            message: 'Sub-service added successfully',
            subService
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all sub-services
const getAllSubServices = async (req, res) => {
    try {
        const subServices = await SubService.find()
            .populate('serviceCategoryId', 'name')
            .sort({ createdAt: -1 });
        res.status(200).json({ subServices });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get sub-service by ID
const getSubServiceById = async (req, res) => {
    try {
        const { id } = req.params;
        const subService = await SubService.findById(id).populate('serviceCategoryId', 'name');

        if (!subService) {
            return res.status(404).json({ message: 'Sub-service not found' });
        }

        res.status(200).json({ subService });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Edit sub-service
const editSubService = async (req, res) => {
    try {
        let { _id, ...updateData } = req.body;

        if (!_id) {
            return res.status(400).json({ message: 'Sub-service ID is required' });
        }

        // Handle file upload or URL
        if (req.file) {
            updateData.image = `http://localhost:3500/uploads/${req.file.filename}`;
        } else if (req.body.imageUrl) {
            updateData.image = req.body.imageUrl;
        }

        const subService = await SubService.findByIdAndUpdate(
            _id,
            updateData,
            { new: true, runValidators: true }
        ).populate('serviceCategoryId', 'name');

        if (!subService) {
            return res.status(404).json({ message: 'Sub-service not found' });
        }

        res.status(200).json({
            message: 'Sub-service updated successfully',
            subService
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Delete sub-service
const deleteSubService = async (req, res) => {
    try {
        const { _id } = req.body;

        if (!_id) {
            return res.status(400).json({ message: 'Sub-service ID is required' });
        }

        const subService = await SubService.findByIdAndDelete(_id);

        if (!subService) {
            return res.status(404).json({ message: 'Sub-service not found' });
        }

        res.status(200).json({ message: 'Sub-service deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = {
    addSubService,
    getAllSubServices,
    getSubServiceById,
    editSubService,
    deleteSubService
};
