import * as constants from './constants';

export const getJobsActions = (params) => ({
    type: constants.GET_JOBS_REQUEST,
    payload: params,
});

export const addJobActions = (data) => ({
    type: constants.ADD_JOB_REQUEST,
    payload: data,
});

export const updateJobActions = (id, data) => ({
    type: constants.UPDATE_JOB_REQUEST,
    payload: { id, data },
});

export const deleteJobActions = (id) => ({
    type: constants.DELETE_JOB_REQUEST,
    payload: id,
});