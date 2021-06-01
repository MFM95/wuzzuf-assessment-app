import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const fetchJobSuccess = (id,title) => {
    return {
        type: actionTypes.FETCH_JOB_SUCCESS,
        id: id,
        title: title,
    };
};

export const fetchJobFail = (error) => {
    return {
        type: actionTypes.FETCH_JOB_FAIL,
        error: error
    };
};

export const fetchJobStart = () => {
    return {
        type: actionTypes.FETCH_JOB_START
    };
};

export const fetchJob = (jobId) => {
    return dispatch => {
        dispatch(fetchJobStart());
        const queryParams = '?api_key=sea';
        axios.get('/jobs/' + jobId + queryParams)
            .then( res => {
                dispatch(fetchJobSuccess(jobId,res.data.title));
            })
            .catch(err => {
                dispatch(fetchJobFail(err));
            });
    }
}

export const fetchRelatedJobsSuccess = (relatedJobs) => {
    return {
        type: actionTypes.FETCH_RELATED_JOBS_IN_JOB_SUCCESS,
        relatedJobs: relatedJobs
    };
};

export const fetchRelatedJobsFail = (error) => {
    return {
        type: actionTypes.FETCH_RELATED_JOBS_IN_JOB_FAIL,
        error: error
    };
};

export const fetchRelatedJobsStart = () => {
    return {
        type: actionTypes.FETCH_RELATED_JOBS_IN_JOB_START
    };
};

export const fetchRelatedJobs = (jobId) => {
    return dispatch => {
        dispatch(fetchRelatedJobsStart());
        const queryParams = '?api_key=sea';
        axios.get('/jobs/' + jobId + '/related_jobs' + queryParams)
            .then( res => {
                const fetchedRelatedJobs = res.data.related_job_titles;
                dispatch(fetchRelatedJobsSuccess(fetchedRelatedJobs));
            })
            .catch(err => {
                dispatch(fetchRelatedJobsFail(err));
            });
    }
}

export const fetchRelatedSkillsSuccess = (relatedSkills) => {
    return {
        type: actionTypes.FETCH_RELATED_SKILLS_IN_JOB_SUCCESS,
        relatedSkills: relatedSkills
    };
};

export const fetchRelatedSkillsFail = (error) => {
    return {
        type: actionTypes.FETCH_RELATED_SKILLS_IN_JOB_FAIL,
        error: error
    };
};

export const fetchRelatedSkillsStart = () => {
    return {
        type: actionTypes.FETCH_RELATED_SKILLS_IN_JOB_START
    };
};

export const fetchRelatedSkills = (jobId) => {
    return dispatch => {
        dispatch(fetchRelatedSkillsStart());
        const queryParams = '?api_key=sea';
        axios.get('/jobs/' + jobId + '/related_skills' + queryParams)
            .then( res => {
                const fetchedRelatedSkills = res.data.skills;
                dispatch(fetchRelatedSkillsSuccess(fetchedRelatedSkills));
            })
            .catch(err => {
                dispatch(fetchRelatedSkillsFail(err));
            });
    }
}