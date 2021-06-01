import React from 'react';

import classes from './Title.css';

const title = (props) => {
    const { title } = props;

    return (<div className={classes.TitleContainer} style={{paddingLeft:props.paddingLeft,paddingTop:props.paddingTop}}>
        <h1 className={classes.Title}>{title}</h1>
    </div>);
};

export default title;