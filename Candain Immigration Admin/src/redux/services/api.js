import { APICore } from '../../helpers/api/apiCore';

const api = new APICore();

// Service APIs
const addService = (data) => {
    const baseUrl = '/service/add';
    return api.create(baseUrl, data);
};

const getAllServices = () => {
    const baseUrl = '/service/getAllServices';
    return api.get(baseUrl);
};

const getServiceById = (id) => {
    const baseUrl = `/service/getServicesById/${id}`;
    return api.get(baseUrl);
};

const editService = (data) => {
    const baseUrl = '/service/edit';
    return api.update(baseUrl, data);
};

const deleteService = (data) => {
    const baseUrl = '/service/delete';
    return api.delete(baseUrl, data);
};

// Sub-service APIs
const addSubService = (data) => {
    const baseUrl = '/subService/add';
    return api.create(baseUrl, data);
};

const getAllSubServices = () => {
    const baseUrl = '/subService/getAllSubServices';
    return api.get(baseUrl);
};

const getSubServiceById = (id) => {
    const baseUrl = `/subService/getSubServicesById/${id}`;
    return api.get(baseUrl);
};

const editSubService = (data) => {
    const baseUrl = '/subService/edit';
    return api.update(baseUrl, data);
};

const deleteSubService = (data) => {
    const baseUrl = '/subService/delete';
    return api.delete(baseUrl, data);
};

export {
    addService,
    getAllServices,
    getServiceById,
    editService,
    deleteService,
    addSubService,
    getAllSubServices,
    getSubServiceById,
    editSubService,
    deleteSubService
};