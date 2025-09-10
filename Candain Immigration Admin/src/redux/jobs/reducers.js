import * as constants from './constants';

const INIT_STATE = {
    jobsData: [],
    loading: false,
    error: null,
};

const jobsDataReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case constants.GET_JOBS_REQUEST:
        case constants.ADD_JOB_REQUEST:
        case constants.UPDATE_JOB_REQUEST:
        case constants.DELETE_JOB_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case constants.GET_JOBS_SUCCESS:
            return {
                ...state,
                loading: false,
                jobsData: action.payload.response || [],
                error: null,
            };

        case constants.ADD_JOB_SUCCESS:
        case constants.UPDATE_JOB_SUCCESS:
        case constants.DELETE_JOB_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
            };

        case constants.GET_JOBS_FAILURE:
        case constants.ADD_JOB_FAILURE:
        case constants.UPDATE_JOB_FAILURE:
        case constants.DELETE_JOB_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default jobsDataReducer;