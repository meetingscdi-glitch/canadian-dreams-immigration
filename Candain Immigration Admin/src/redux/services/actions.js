import * as types from './constants';

// Service actions
export const getServicesActions = (data) => ({
    type: types.GET_SERVICES_REQUEST,
    payload: data,
});

export const addServicesActions = (data) => ({
    type: types.ADD_SERVICES_REQUEST,
    payload: data,
});

export const updateServicesActions = (data) => ({
    type: types.UPDATE_SERVICES_REQUEST,
    payload: data,
});

export const deleteServicesActions = (data) => ({
    type: types.DELETE_SERVICES_REQUEST,
    payload: data,
});

// Sub-service actions
export const getSubServicesActions = (data) => ({
    type: types.GET_SUB_SERVICES_REQUEST,
    payload: data,
});

export const addSubServicesActions = (data) => ({
    type: types.ADD_SUB_SERVICES_REQUEST,
    payload: data,
});

export const updateSubServicesActions = (data) => ({
    type: types.UPDATE_SUB_SERVICES_REQUEST,
    payload: data,
});

export const deleteSubServicesActions = (data) => ({
    type: types.DELETE_SUB_SERVICES_REQUEST,
    payload: data,
});
