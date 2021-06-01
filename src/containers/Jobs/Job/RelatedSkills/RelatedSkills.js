import React from 'react';

import SubTitle from '../../../../components/UI/SubTitle/SubTitle';
import RelatedCard from '../../../../components/RelatedCard/RelatedCard';
import classes from './RelatedSkills.css';

const relatedSkills = (props) => {
    const { relatedSkillsArr } = props;

    let RelatedSkills = relatedSkillsArr.map(skill => {
        let RelatedCardItems = [];
        RelatedCardItems = [
            {
                keyTitle: 'Type: ',
                keyValue: skill.skill_type
            },
            {
                keyTitle: 'Importance: ',
                keyValue: skill.importance
            },
            {
                keyTitle: 'Level: ',
                keyValue: skill.level
            },
        ];
        return (<RelatedCard
            key={skill.skill_uuid}
            title={skill.skill_name}
            details={skill.description}
            relatedCardItems={RelatedCardItems}
            minHeight={173}
            url={'/skill/' + skill.skill_uuid} />);
    });

    return (<div className={classes.RelatedSkillsContainer}>
        <SubTitle paddingTop={30}
            paddingLeft={39}
            title={'Related Skills:'} />
        {RelatedSkills}
    </div>);
};

export default relatedSkills;