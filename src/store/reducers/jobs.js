import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    jobs: [],
    count: 0,
    offset: 0,
    nextOffset: 0,
    loading: false
};

const fetchJobsStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const fetchJobsSuccess = (state, action) => {
    return updateObject(state, {
        jobs: action.jobs,
        count: action.count,
        offset: action.offset,
        nextOffset: action.nextOffset,
        loading: false
    });
};

const fetchJobsFail = (state, action) => {
    return updateObject(state, { loading: false, jobs: [], count: 0, offset: 0, nextOffset:0 });
};

const reSetCountJobsSuccess = (state, action) => {
    return updateObject(state, { jobs: [], count: 0, offset: 0, nextOffset:0 });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_JOBS_START: return fetchJobsStart(state, action);
        case actionTypes.FETCH_JOBS_SUCCESS: return fetchJobsSuccess(state, action);
        case actionTypes.FETCH_JOBS_FAIL: return fetchJobsFail(state, action);
        case actionTypes.RE_SET_COUNT_JOBS_SUCCESS: return  reSetCountJobsSuccess(state, action);
        default: return state;
    }
};

export default reducer;