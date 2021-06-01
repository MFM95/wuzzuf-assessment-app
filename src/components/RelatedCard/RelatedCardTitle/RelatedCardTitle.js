import React from 'react';

import classes from './RelatedCardTitle.css';

const relatedCardTitle = (props) => {
    const { title, url } = props;

    return (<div className={classes.RelatedCardTitleContainer}>
        <a href={url} className={classes.RelatedCardTitle}>{title}</a>
    </div>);
};

export default relatedCardTitle;