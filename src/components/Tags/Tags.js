import React, { useState, useEffect } from 'react';

import axios from '../../axios';
import Tag from './Tag/Tag';
import classes from './Tags.css';

const tags = (props) => {
    const { jobID } = props;

    const [loadingState, setLoadingState] = useState(true);
    const [tagsState, setTagsState] = useState([]);

    const queryParams = '?api_key=sea';
    let fetchedRelatedSkills = [];

    useEffect(() => {
        axios.get('/jobs/' + jobID + '/related_skills' + queryParams)
            .then(res => {
                let limitation = 6;
                let counter = 0;
                for (let key in res.data.skills) {
                    if (counter < limitation) {
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
                setTagsState(fetchedRelatedSkills);
                setLoadingState(false);
            })
            .catch(err => {
                setLoadingState(true);
            });
    }, []);


    return (<div className={classes.TagsContainer}>
        {!loadingState
            ? tagsState.map(tag => (
                <Tag
                    key={tag.skillId}
                    tagTitle={tag.skillName}
                    id={tag.skillId} />
            ))
            : <React.Fragment>
                <div className={classes.TagsSkeleton}></div>
                <div className={classes.TagsSkeleton}></div>
                <div className={classes.TagsSkeleton}></div>
                <div className={classes.TagsSkeleton}></div>
                <div className={classes.TagsSkeleton}></div>
                <div className={classes.TagsSkeleton}></div>
            </React.Fragment>}
    </div>);
};

export default tags;