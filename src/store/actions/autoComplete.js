import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const fetchAutoCompleteJobsSuccess = (queryJobs,count) => {
    return {
        type: actionTypes.FETCH_AUTO_COMPLETE_JOBS_SUCCESS,
        queryJobs: queryJobs,
        count: count
    };
};

export const fetchAutoCompleteJobsFail = (error) => {
    return {
        type: actionTypes.FETCH_AUTO_COMPLETE_JOBS_FAIL,
        error: error
    };
};

export const fetchAutoCompleteJobsStart = () => {
    return {
        type: actionTypes.FETCH_AUTO_COMPLETE_JOBS_START
    };
};

export const fetchAutoCompleteJobs = (queryValue) => {
    return dispatch => {
        dispatch(fetchAutoCompleteJobsStart());

        const queryParams = '?begins_with=' + queryValue + '&contains=' + queryValue + '&ends_with=' + queryValue  + '&api_key=sea';
        axios.get('/jobs/autocomplete' + queryParams)
            .then(async (res) => {
                const fetchedJobs = [];
                for (let key in res.data) {
                        fetchedJobs.push(res.data[key].suggestion);
                }
                dispatch(fetchAutoCompleteJobsSuccess(fetchedJobs,fetchedJobs.length));
            })
            .catch(err => {
                dispatch(fetchAutoCompleteJobsFail(err));
            });
    }
}

export const reSetAutoCompleteJobsSuccess = () => {
    return {
        type: actionTypes.RE_SET_AUTO_COMPLETE_JOBS_SUCCESS,
    };
};

export const reSetAutoCompleteJobs = () => {
    return dispatch => {
        dispatch(reSetAutoCompleteJobsSuccess());
    }
};