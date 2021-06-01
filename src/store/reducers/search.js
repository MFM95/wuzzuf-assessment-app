import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    queryValue: '',
    queryJobs: [],
    searchHistory: [],
    count: 0,
    loading: false
};

const setQueryValueSuccess = (state, action) => {
    return updateObject(state, { queryValue: action.queryValue });
};

const setSearchHistorySuccess = (state, action) => {
    return updateObject(state, { searchHistory: action.searchHistory });
};

const reSetQueryJobsSuccess = (state, action) => {
    return updateObject(state, { queryJobs: action.queryJobs });
};

const fetchQueryJobsStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const fetchQueryJobsSuccess = (state, action) => {
    return updateObject(state, {
        queryJobs: action.queryJobs,
        count: action.count,
        loading: false
    });
};

const fetchQueryJobsFail = (state, action) => {
    return updateObject(state, { loading: false, queryJobs: [], count: 0 });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_QUERY_VALUE_SUCCESS: return setQueryValueSuccess(state, action);
        case actionTypes.SET_SEARCH_HISTORY_SUCCESS: return setSearchHistorySuccess(state, action);
        case actionTypes.RE_SET_QUERY_JOBS_SUCCESS: return reSetQueryJobsSuccess(state, action);
        case actionTypes.FETCH_QUERY_JOBS_START: return fetchQueryJobsStart(state, action);
        case actionTypes.FETCH_QUERY_JOBS_SUCCESS: return fetchQueryJobsSuccess(state, action);
        case actionTypes.FETCH_QUERY_JOBS_FAIL: return fetchQueryJobsFail(state, action);
        default: return state;
    }
};

export default reducer;