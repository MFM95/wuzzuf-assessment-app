import React from 'react';

import classes from './Description.css';

const description = (props) => {
    const { details } = props;

    return (<div className={classes.DescriptionContainer} style={{paddingLeft:props.paddingLeft,paddingTop:props.paddingTop}}>
        <p className={classes.Description}>{details}</p>
    </div>);
};

export default description;