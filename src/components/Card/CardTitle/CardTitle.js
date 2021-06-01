import React from 'react';

import classes from './CardTitle.css';

const cardTitle = (props) => {
    const { title } = props;

    return (<div className={classes.CardTitleContainer}>
        <h1 className={classes.CardTitle}>{title}</h1>
    </div>);
};

export default cardTitle;