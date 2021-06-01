import React from 'react';

import classes from './SubTitle.css';

const subTitle = (props) => {
    const { title } = props;

    return (<div className={classes.SubTitleContainer} style={{paddingLeft:props.paddingLeft,paddingTop:props.paddingTop}}>
        <h1 className={classes.SubTitle}>{title}</h1>
    </div>);
};

export default subTitle;