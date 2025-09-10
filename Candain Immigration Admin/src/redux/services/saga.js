import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from './constants';
import * as api from './api';

// Service sagas
function* getServicesSaga(action) {
    try {
        const response = yield call(api.getAllServices);
        yield put({ type: types.GET_SERVICES_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: types.GET_SERVICES_FAILURE, payload: error.message });
    }
}

function* addServicesSaga(action) {
    try {
        yield call(api.addService, action.payload);
        yield put({ type: types.ADD_SERVICES_SUCCESS });
        yield put({ type: types.GET_SERVICES_REQUEST });
    } catch (error) {
        yield put({ type: types.ADD_SERVICES_FAILURE, payload: error.message });
    }
}

function* updateServicesSaga(action) {
    try {
        yield call(api.editService, action.payload);
        yield put({ type: types.UPDATE_SERVICES_SUCCESS });
        yield put({ type: types.GET_SERVICES_REQUEST });
    } catch (error) {
        yield put({ type: types.UPDATE_SERVICES_FAILURE, payload: error.message });
    }
}

function* deleteServicesSaga(action) {
    try {
        yield call(api.deleteService, action.payload);
        yield put({ type: types.DELETE_SERVICES_SUCCESS });
        yield put({ type: types.GET_SERVICES_REQUEST });
    } catch (error) {
        yield put({ type: types.DELETE_SERVICES_FAILURE, payload: error.message });
    }
}

// Sub-service sagas
function* getSubServicesSaga(action) {
    try {
        const response = yield call(api.getAllSubServices);
        yield put({ type: types.GET_SUB_SERVICES_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: types.GET_SUB_SERVICES_FAILURE, payload: error.message });
    }
}

function* addSubServicesSaga(action) {
    try {
        yield call(api.addSubService, action.payload);
        yield put({ type: types.ADD_SUB_SERVICES_SUCCESS });
        yield put({ type: types.GET_SUB_SERVICES_REQUEST });
    } catch (error) {
        yield put({ type: types.ADD_SUB_SERVICES_FAILURE, payload: error.message });
    }
}

function* updateSubServicesSaga(action) {
    try {
        yield call(api.editSubService, action.payload);
        yield put({ type: types.UPDATE_SUB_SERVICES_SUCCESS });
        yield put({ type: types.GET_SUB_SERVICES_REQUEST });
    } catch (error) {
        yield put({ type: types.UPDATE_SUB_SERVICES_FAILURE, payload: error.message });
    }
}

function* deleteSubServicesSaga(action) {
    try {
        yield call(api.deleteSubService, action.payload);
        yield put({ type: types.DELETE_SUB_SERVICES_SUCCESS });
        yield put({ type: types.GET_SUB_SERVICES_REQUEST });
    } catch (error) {
        yield put({ type: types.DELETE_SUB_SERVICES_FAILURE, payload: error.message });
    }
}

export default function* servicesSaga() {
    yield takeEvery(types.GET_SERVICES_REQUEST, getServicesSaga);
    yield takeEvery(types.ADD_SERVICES_REQUEST, addServicesSaga);
    yield takeEvery(types.UPDATE_SERVICES_REQUEST, updateServicesSaga);
    yield takeEvery(types.DELETE_SERVICES_REQUEST, deleteServicesSaga);
    yield takeEvery(types.GET_SUB_SERVICES_REQUEST, getSubServicesSaga);
    yield takeEvery(types.ADD_SUB_SERVICES_REQUEST, addSubServicesSaga);
    yield takeEvery(types.UPDATE_SUB_SERVICES_REQUEST, updateSubServicesSaga);
    yield takeEvery(types.DELETE_SUB_SERVICES_REQUEST, deleteSubServicesSaga);
}