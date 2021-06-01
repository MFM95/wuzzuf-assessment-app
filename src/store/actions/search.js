import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const setQueryValueSuccess = (queryValue) => {
    return {
        type: actionTypes.SET_QUERY_VALUE_SUCCESS,
        queryValue: queryValue
    };
};

export const setQueryValue = (queryValue) => {
    return dispatch => {
        dispatch(setQueryValueSuccess(queryValue));
    }
};

export const fetchQueryJobsSuccess = (queryJobs,count) => {
    return {
        type: actionTypes.FETCH_QUERY_JOBS_SUCCESS,
        queryJobs: queryJobs,
        count: count
    };
};

export const fetchQueryJobsFail = (error) => {
    return {
        type: actionTypes.FETCH_QUERY_JOBS_FAIL,
        error: error
    };
};

export const fetchQueryJobsStart = () => {
    return {
        type: actionTypes.FETCH_QUERY_JOBS_START
    };
};

export const fetchQueryJobs = (queryValue) => {
    return dispatch => {
        if(queryValue.length > 0) {
            dispatch(fetchQueryJobsStart());

            const queryParams = '?begins_with=' + queryValue + '&contains=' + queryValue + '&ends_with=' + queryValue  + '&api_key=sea';
            axios.get('/jobs/autocomplete' + queryParams)
                .then(async (res) => {
                    const fetchedJobs = [];
                    for (let key in res.data) {
                            let relatedSkillsObj = await fetchRelatedSkills(res.data[key].uuid);
                            let jobsObj = {
                                id: res.data[key].uuid,
                                title: res.data[key].suggestion,
                                normalizedJobTitle: res.data[key].normalized_job_title,
                                parentId: res.data[key].parent_uuid,
                                skills: relatedSkillsObj
                            }
                            fetchedJobs.push({
                                ...jobsObj
                            });
                    }
                    dispatch(fetchQueryJobsSuccess(fetchedJobs,fetchedJobs.length));
                })
                .catch(err => {
                    dispatch(fetchQueryJobsFail(err));
                });
        }else{
            dispatch(fetchQueryJobsFail());
        }
    }
}

export const fetchRelatedSkills = async (jobId) => {
    const queryParams = '?api_key=sea';
    let fetchedRelatedSkills = [];

    await axios.get('/jobs/' + jobId + '/related_skills' + queryParams)
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

export const setSearchHistorySuccess = (searchHistory) => {
    return {
        type: actionTypes.SET_SEARCH_HISTORY_SUCCESS,
        searchHistory: searchHistory
    };
};

export const setSearchHistory = (queryValue) => {
    return (dispatch, getState) => {
        let searchHistory = getState().search.searchHistory;

        if(!searchHistory.includes(queryValue)){
            searchHistory.push(
                queryValue
            );
        
            dispatch(setSearchHistorySuccess(searchHistory));
        }
    }
};

export const reSetQueryJobsSuccess = (queryJobs) => {
    return {
        type: actionTypes.RE_SET_QUERY_JOBS_SUCCESS,
        queryJobs: queryJobs
    };
};

export const reSetQueryJobs = (queryJobs) => {
    return dispatch => {
        dispatch(reSetQueryJobsSuccess(queryJobs));
    }
};