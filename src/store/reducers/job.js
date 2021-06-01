import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    id: null,
    title: '',
    relatedJobs: [],
    relatedSkills: [],
    loading: false,
};

const fetchJobStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const fetchJobSuccess = (state, action) => {
    return updateObject(state, {
        id: action.id,
        title: action.title,
        loading: false
    });
};

const fetchJobFail = (state, action) => {
    return updateObject(state, { loading: false, id: null, title: '', relatedJobs: [], relatedSkills: []  });
};

const fetchRelatedJobsStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const fetchRelatedJobsSuccess = (state, action) => {
    return updateObject(state, {
        relatedJobs: action.relatedJobs,
        loading: false
    });
};

const fetchRelatedJobsFail = (state, action) => {
    return updateObject(state, { loading: false });
};

const fetchRelatedSkillsStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const fetchRelatedSkillsSuccess = (state, action) => {
    return updateObject(state, {
        relatedSkills: action.relatedSkills,
        loading: false
    });
};

const fetchRelatedSkillsFail = (state, action) => {
    return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_JOB_START: return fetchJobStart(state, action);
        case actionTypes.FETCH_JOB_SUCCESS: return fetchJobSuccess(state, action);
        case actionTypes.FETCH_JOB_FAIL: return fetchJobFail(state, action);
        case actionTypes.FETCH_RELATED_JOBS_IN_JOB_START: return fetchRelatedJobsStart(state, action);
        case actionTypes.FETCH_RELATED_JOBS_IN_JOB_SUCCESS: return fetchRelatedJobsSuccess(state, action);
        case actionTypes.FETCH_RELATED_JOBS_IN_JOB_FAIL: return fetchRelatedJobsFail(state, action);
        case actionTypes.FETCH_RELATED_SKILLS_IN_JOB_START: return fetchRelatedSkillsStart(state, action);
        case actionTypes.FETCH_RELATED_SKILLS_IN_JOB_SUCCESS: return fetchRelatedSkillsSuccess(state, action);
        case actionTypes.FETCH_RELATED_SKILLS_IN_JOB_FAIL: return fetchRelatedSkillsFail(state, action);
        default: return state;
    }
};

export default reducer;