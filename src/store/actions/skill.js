import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const fetchSkillSuccess = (id,title,description) => {
    return {
        type: actionTypes.FETCH_SKILL_SUCCESS,
        id: id,
        title: title,
        description: description,
    };
};

export const fetchSkillFail = (error) => {
    return {
        type: actionTypes.FETCH_SKILL_FAIL,
        error: error
    };
};

export const fetchSkillStart = () => {
    return {
        type: actionTypes.FETCH_SKILL_START
    };
};

export const fetchSkill = (skillId) => {
    return dispatch => {
        dispatch(fetchSkillStart());
        const queryParams = '?api_key=sea';
        axios.get('/skills/' + skillId + queryParams)
            .then( res => {
                dispatch(fetchSkillSuccess(skillId,res.data.skill_name,res.data.description));
            })
            .catch(err => {
                dispatch(fetchSkillFail(err));
            });
    }
}

export const fetchRelatedJobsSuccess = (relatedJobs) => {
    return {
        type: actionTypes.FETCH_RELATED_JOBS_IN_SKILL_SUCCESS,
        relatedJobs: relatedJobs
    };
};

export const fetchRelatedJobsFail = (error) => {
    return {
        type: actionTypes.FETCH_RELATED_JOBS_IN_SKILL_FAIL,
        error: error
    };
};

export const fetchRelatedJobsStart = () => {
    return {
        type: actionTypes.FETCH_RELATED_JOBS_IN_SKILL_START
    };
};

export const fetchRelatedJobs = (skillId) => {
    return dispatch => {
        dispatch(fetchRelatedJobsStart());
        const queryParams = '?api_key=sea';
        axios.get('/skills/' + skillId + '/related_jobs' + queryParams)
            .then( res => {
                const fetchedRelatedJobs = res.data.jobs;
                dispatch(fetchRelatedJobsSuccess(fetchedRelatedJobs));
            })
            .catch(err => {
                dispatch(fetchRelatedJobsFail(err));
            });
    }
}

export const fetchRelatedSkillsSuccess = (relatedSkills) => {
    return {
        type: actionTypes.FETCH_RELATED_SKILLS_IN_SKILL_SUCCESS,
        relatedSkills: relatedSkills
    };
};

export const fetchRelatedSkillsFail = (error) => {
    return {
        type: actionTypes.FETCH_RELATED_SKILLS_IN_SKILL_FAIL,
        error: error
    };
};

export const fetchRelatedSkillsStart = () => {
    return {
        type: actionTypes.FETCH_RELATED_SKILLS_IN_SKILL_START
    };
};

export const fetchRelatedSkills = (skillId) => {
    return dispatch => {
        dispatch(fetchRelatedSkillsStart());
        const queryParams = '?api_key=sea';
        axios.get('/skills/' + skillId + '/related_skills' + queryParams)
            .then( res => {
                const fetchedRelatedSkills = res.data.skills;
                dispatch(fetchRelatedSkillsSuccess(fetchedRelatedSkills));
            })
            .catch(err => {
                dispatch(fetchRelatedSkillsFail(err));
            });
    }
}