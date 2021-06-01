import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const fetchJobsSuccess = (jobs,count,offset,nextOffset) => {
    return {
        type: actionTypes.FETCH_JOBS_SUCCESS,
        jobs: jobs,
        count: count,
        offset: offset,
        nextOffset: nextOffset,
    };
};

export const fetchJobsFail = (error) => {
    return {
        type: actionTypes.FETCH_JOBS_FAIL,
        error: error
    };
};

export const fetchJobsStart = () => {
    return {
        type: actionTypes.FETCH_JOBS_START
    };
};

export const fetchJobs = (offset, limit) => {
    return (dispatch, getState)  => {
        let prevJobs = getState().jobs.jobs;

        if(prevJobs.length === 0) {
            dispatch(fetchJobsStart());
        }

        const queryParams = '?offset=' + offset + '&limit=' + limit + '&api_key=sea';
        axios.get('/jobs' + queryParams)
            .then(async (res) => {
                let lastItem = res.data.length;
                const fetchedJobs = [];
                for (let key in res.data) {
                    if (--lastItem){
                        let relatedSkillsObj = await fetchRelatedSkills(res.data[key].uuid);
                        let jobsObj = {
                            id: res.data[key].uuid,
                            title: res.data[key].title,
                            normalizedJobTitle: res.data[key].normalized_job_title,
                            parentId: res.data[key].parent_uuid,
                            skills: relatedSkillsObj
                        }
                        fetchedJobs.push({
                            ...jobsObj
                        });
                    }
                }
                const Final =  prevJobs.concat(fetchedJobs);
                const NextOffset = offset + limit; 
                dispatch(fetchJobsSuccess(Final,Final.length,offset,NextOffset));
            })
            .catch(err => {
                dispatch(fetchJobsFail(err));
            });
    }
}

export const fetchRelatedSkills = (jobId) => {
    const queryParams = '?api_key=sea';
    let fetchedRelatedSkills = [];

    axios.get('/jobs/' + jobId + '/related_skills' + queryParams)
            .then(res => {
                let limitation = 6;
                let counter = 0 ;
                for (let key in res.data.skills) {
                    if (counter < limitation){
                        let relatedSkillsObj = {
                            skillId: res.data.skills[key].skill_uuid,
                            skillName: res.data.skills[key].skill_name,
                            normalizedSkillName: res.data.skills[key].normalized_skill_name,
                        }
                        fetchedRelatedSkills.push({
                            ...relatedSkillsObj
                        });
                        counter++;
                    }
                }
            })
            .catch(err => {
                return err;
            });
            return fetchedRelatedSkills;
}

export const reSetCountJobsSuccess = () => {
    return {
        type: actionTypes.RE_SET_COUNT_JOBS_SUCCESS,
    };
};

export const reSetCountJobs = () => {
    return dispatch => {
        dispatch(reSetCountJobsSuccess());
    }
};