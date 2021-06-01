import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    id: null,
    title: '',
    description:'',
    relatedJobs: [],
    relatedSkills: [],
    loading: false
};

const fetchSkillStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const fetchSkillSuccess = (state, action) => {
    return updateObject(state, {
        id: action.id,
        title: action.title,
        description: action.description,
        loading: false
    });
};

const fetchSkillFail = (state, action) => {
    return updateObject(state, { loading: false, id: null, title: '', description: '', relatedJobs: [], relatedSkills: [] });
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
        case actionTypes.FETCH_SKILL_START: return fetchSkillStart(state, action);
        case actionTypes.FETCH_SKILL_SUCCESS: return fetchSkillSuccess(state, action);
        case actionTypes.FETCH_SKILL_FAIL: return fetchSkillFail(state, action);
        case actionTypes.FETCH_RELATED_JOBS_IN_SKILL_START: return fetchRelatedJobsStart(state, action);
        case actionTypes.FETCH_RELATED_JOBS_IN_SKILL_SUCCESS: return fetchRelatedJobsSuccess(state, action);
        case actionTypes.FETCH_RELATED_JOBS_IN_SKILL_FAIL: return fetchRelatedJobsFail(state, action);
        case actionTypes.FETCH_RELATED_SKILLS_IN_SKILL_START: return fetchRelatedSkillsStart(state, action);
        case actionTypes.FETCH_RELATED_SKILLS_IN_SKILL_SUCCESS: return fetchRelatedSkillsSuccess(state, action);
        case actionTypes.FETCH_RELATED_SKILLS_IN_SKILL_FAIL: return fetchRelatedSkillsFail(state, action);
        default: return state;
    }
};

export default reducer;