import { APICore } from '../../helpers/api/apiCore';

const api = new APICore();

const getJobs = (params) => {
    const baseURL = '/api/postJob/getAllPostJob';
    return api.get(`${baseURL}`, params);
};

const addJob = (data) => {
    const baseURL = '/api/postJob/add';
    return api.createWithFile(`${baseURL}`, data);
};

const updateJob = (id, data) => {
    const baseURL = '/api/postJob/edit';
    return api.updatePutWithFile(`${baseURL}`, data);
};

const deleteJob = (id) => {
    const baseURL = '/api/postJob/delete';
    return api.delete(`${baseURL}`, { _id: id });
};

export { getJobs, addJob, updateJob, deleteJob };