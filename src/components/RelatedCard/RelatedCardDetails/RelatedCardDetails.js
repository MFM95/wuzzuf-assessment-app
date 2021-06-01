import React from 'react';

import classes from './RelatedCardDetails.css';

const relatedCardDetails = (props) => {
    const { details } = props;

    return (<div className={classes.RelatedCardDetailsContainer}>
        <p className={classes.RelatedCardDetails}>{details}</p>
    </div>);
};

export default relatedCardDetails;