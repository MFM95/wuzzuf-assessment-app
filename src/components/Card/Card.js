import React from 'react';

import CardTitle from './CardTitle/CardTitle';
import CardSubTitle from './CardSubTitle/CardSubTitle';
import CardLink from './CardLink/CardLink';
import Tags from '../Tags/Tags';
import classes from './Card.css';

const card = ( props ) => {

    const { title, id, skills, type} = props;

    return (
        <div className={type === 'search' ? classes.CardSearchContainer : classes.CardContainer }>
            <CardTitle title={title} />
            <CardSubTitle subTitle={'Related Skills:'} />
            <Tags jobID={id} tagsArr={skills} />
            <CardLink titleLink={'View Job details'} url={'/job/' + id} />
        </div>
    );
};

export default card;