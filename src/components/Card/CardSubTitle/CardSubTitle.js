import React from 'react';

import classes from './CardSubTitle.css';

const cardSubTitle = (props) => {
    const { subTitle } = props;

    return (<div className={classes.CardSubTitleContainer}>
        <h1 className={classes.CardSubTitle}>{subTitle}</h1>
    </div>);
};

export default cardSubTitle;