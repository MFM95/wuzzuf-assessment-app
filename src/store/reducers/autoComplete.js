import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    queryJobs: [],
    count: 0,
    loading: false
};

const fetchAutoCompleteJobsStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const fetchAutoCompleteJobsSuccess = (state, action) => {
    return updateObject(state, {
        queryJobs: action.queryJobs,
        count: action.count,
        loading: false
    });
};

const fetchAutoCompleteJobsFail = (state, action) => {
    return updateObject(state, { loading: false, queryJobs: [] });
};

const reSetAutoCompleteJobsSuccess = (state, action) => {
    return updateObject(state, { queryJobs: [], count: 0 });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_AUTO_COMPLETE_JOBS_START: return fetchAutoCompleteJobsStart(state, action);
        case actionTypes.FETCH_AUTO_COMPLETE_JOBS_SUCCESS: return fetchAutoCompleteJobsSuccess(state, action);
        case actionTypes.FETCH_AUTO_COMPLETE_JOBS_FAIL: return fetchAutoCompleteJobsFail(state, action);
        case actionTypes.RE_SET_AUTO_COMPLETE_JOBS_SUCCESS: return reSetAutoCompleteJobsSuccess(state, action);
        default: return state;
    }
};

export default reducer;