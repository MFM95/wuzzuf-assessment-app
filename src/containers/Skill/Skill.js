import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import Spinner from '../../components/UI/Spinner/Spinner';
import Title from '../../components/UI/Title/Title';
import RelatedJobs from './RelatedJobs/RelatedJobs';
import RightSide from '../../components/RightSide/RightSide';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios';
import { fetchSkill, fetchRelatedJobs, fetchRelatedSkills } from '../../store/actions/skill';
import classes from './Skill.css';

const skill = props => {
    const { skillTitle, skillDescription, loading, relatedJobs, relatedSkills, onFetchSkill, onFetchRelatedJobs, onFetchRelatedSkills } = props;
    const skillID = props.match.params.id;

    useEffect(() => {
        onFetchSkill(skillID);
        onFetchRelatedJobs(skillID);
        onFetchRelatedSkills(skillID);
    }, []);

    let skillContainer = <Spinner />;
    if (!loading) {
        skillContainer = (<React.Fragment>
            <Title
                paddingTop={44}
                paddingLeft={44}
                title={skillTitle} />
            <div className={classes.SkillContainer}>
                <RelatedJobs
                    skillDescription={skillDescription}
                    relatedJobsArr={relatedJobs} />
                <RightSide
                    type={'skill'}
                    rightSideTitle={'Related Skills:'}
                    relatedItems={relatedSkills} />
            </div>
        </React.Fragment>)
    }

    return (
        <Aux>
            {skillContainer}
        </Aux>
    );
};

const mapStateToProps = state => {
    return {
        skillTitle: state.skill.title,
        skillDescription: state.skill.description,
        relatedJobs: state.skill.relatedJobs,
        relatedSkills: state.skill.relatedSkills,
        loading: state.skill.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchSkill: (skillId) => dispatch(fetchSkill(skillId)),
        onFetchRelatedJobs: (skillId) => dispatch(fetchRelatedJobs(skillId)),
        onFetchRelatedSkills: (skillId) => dispatch(fetchRelatedSkills(skillId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(skill, axios));