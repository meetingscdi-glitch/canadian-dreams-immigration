import { APICore } from '../../helpers/api/apiCore';

const api = new APICore();

// Service APIs
const addService = (data) => {
    const baseUrl = '/api/service/add';
    return api.create(baseUrl, data);
};

const getAllServices = () => {
    const baseUrl = '/api/service/getAllServices';
    return api.get(baseUrl);
};

const getServiceById = (id) => {
    const baseUrl = `/api/service/getServicesById/${id}`;
    return api.get(baseUrl);
};

const editService = (data) => {
    const baseUrl = '/api/service/edit';
    return api.update(baseUrl, data);
};

const deleteService = (data) => {
    const baseUrl = '/api/service/delete';
    return api.delete(baseUrl, data);
};

// Sub-service APIs
const addSubService = (data) => {
    const baseUrl = '/api/subService/add';
    if (data instanceof FormData) {
        return api.createWithFile(baseUrl, data);
    }
    return api.create(baseUrl, data);
};

const getAllSubServices = () => {
    const baseUrl = '/api/subService/getAllSubServices';
    return api.get(baseUrl);
};

const getSubServiceById = (id) => {
    const baseUrl = `/api/subService/getSubServicesById/${id}`;
    return api.get(baseUrl);
};

const editSubService = (data) => {
    const baseUrl = '/api/subService/edit';
    if (data instanceof FormData) {
        return api.updatePutWithFile(baseUrl, data);
    }
    return api.update(baseUrl, data);
};

const deleteSubService = (data) => {
    const baseUrl = '/api/subService/delete';
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
