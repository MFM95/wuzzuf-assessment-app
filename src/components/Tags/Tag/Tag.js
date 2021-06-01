import React from 'react';

import classes from './Tag.css';

const tag = (props) => {
    const { tagTitle } = props;

    return (<div className={classes.TagContainer}>
        {tagTitle}
    </div>);
};

export default tag;