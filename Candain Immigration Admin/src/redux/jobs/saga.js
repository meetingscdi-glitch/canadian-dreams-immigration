import { call, put, takeEvery } from 'redux-saga/effects';
import * as constants from './constants';
import * as api from './api';

function* getJobsSaga(action) {
    try {
        const response = yield call(api.getJobs, action.payload);
        yield put({ type: constants.GET_JOBS_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: constants.GET_JOBS_FAILURE, payload: error.message });
    }
}

function* addJobSaga(action) {
    try {
        const response = yield call(api.addJob, action.payload);
        yield put({ type: constants.ADD_JOB_SUCCESS });
        yield put({ type: constants.GET_JOBS_REQUEST });
    } catch (error) {
        yield put({ type: constants.ADD_JOB_FAILURE, payload: error.message });
    }
}

function* updateJobSaga(action) {
    try {
        const response = yield call(api.updateJob, action.payload.id, action.payload.data);
        yield put({ type: constants.UPDATE_JOB_SUCCESS });
        yield put({ type: constants.GET_JOBS_REQUEST });
    } catch (error) {
        yield put({ type: constants.UPDATE_JOB_FAILURE, payload: error.message });
    }
}

function* deleteJobSaga(action) {
    try {
        yield call(api.deleteJob, action.payload);
        yield put({ type: constants.DELETE_JOB_SUCCESS });
        yield put({ type: constants.GET_JOBS_REQUEST });
    } catch (error) {
        yield put({ type: constants.DELETE_JOB_FAILURE, payload: error.message });
    }
}

export default function* jobsSaga() {
    yield takeEvery(constants.GET_JOBS_REQUEST, getJobsSaga);
    yield takeEvery(constants.ADD_JOB_REQUEST, addJobSaga);
    yield takeEvery(constants.UPDATE_JOB_REQUEST, updateJobSaga);
    yield takeEvery(constants.DELETE_JOB_REQUEST, deleteJobSaga);
}