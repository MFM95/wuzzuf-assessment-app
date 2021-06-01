import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Aux from '../../../hoc/Aux/Aux';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Title from '../../../components/UI/Title/Title';
import RelatedSkills from './RelatedSkills/RelatedSkills';
import RightSide from '../../../components/RightSide/RightSide';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../../axios';
import { fetchJob, fetchRelatedJobs, fetchRelatedSkills } from '../../../store/actions/job';
import classes from './Job.css';

const job = props => {
    const { jobTitle, loading, relatedJobs, relatedSkills, onFetchJob, onFetchRelatedJobs, onFetchRelatedSkills } = props;
    const jobID = props.match.params.id;

    useEffect(() => {
        onFetchJob(jobID);
        onFetchRelatedJobs(jobID);
        onFetchRelatedSkills(jobID);
    }, []);

    let jobContainer = <Spinner />;
    if (!loading) {
        jobContainer = (<React.Fragment>
            <Title
                paddingTop={44}
                paddingLeft={44}
                title={jobTitle} />
            <div className={classes.JobContainer}>
                <RelatedSkills relatedSkillsArr={relatedSkills} />
                <RightSide
                    type={'job'}
                    rightSideTitle={'Related Jobs:'}
                    relatedItems={relatedJobs} />
            </div>
        </React.Fragment>)
    }

    return (
        <Aux>
            {jobContainer}
        </Aux>
    );
};

const mapStateToProps = state => {
    return {
        jobTitle: state.job.title,
        relatedJobs: state.job.relatedJobs,
        relatedSkills: state.job.relatedSkills,
        loading: state.job.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchJob: (jobId) => dispatch(fetchJob(jobId)),
        onFetchRelatedJobs: (jobId) => dispatch(fetchRelatedJobs(jobId)),
        onFetchRelatedSkills: (jobId) => dispatch(fetchRelatedSkills(jobId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(job, axios));