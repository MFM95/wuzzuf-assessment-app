import React from 'react';

import SubTitle from '../../../components/UI/SubTitle/SubTitle';
import Description from '../../../components/UI/Description/Description';
import RelatedCard from '../../../components/RelatedCard/RelatedCard';
import classes from './RelatedJobs.css';

const relatedJobs = (props) => {
    const { relatedJobsArr, skillDescription } = props;

    let RelatedJobs = relatedJobsArr.map(job => {
        let RelatedCardItems = [];
        RelatedCardItems = [
            {
                keyTitle: 'Importance: ',
                keyValue: job.importance
            },
            {
                keyTitle: 'Level: ',
                keyValue: job.level
            },
        ];
        return (<RelatedCard
            key={job.job_uuid}
            title={job.job_title}
            relatedCardItems={RelatedCardItems}
            minHeight={130}
            url={'/job/' + job.job_uuid} />);
    });

    return (<div className={classes.RelatedJobsContainer}>
        <SubTitle paddingTop={28}
            paddingLeft={39}
            title={'Description:'} />

        <Description paddingTop={22}
            paddingLeft={39}
            details={skillDescription} />

        <SubTitle paddingTop={30}
            paddingLeft={39}
            title={'Related Jobs:'} />
        {RelatedJobs}
    </div>);
};

export default relatedJobs;