import React from 'react';

import classes from './RelatedCardItem.css';

const relatedCardItem = (props) => {
    const { keyValue, keyTitle } = props;

    return (<div className={classes.RelatedCardItemContainer}>
        <p className={classes.RelatedCardItemTitle}>
            <span className={classes.RelatedCardItemKey}>{keyTitle}</span>
            {keyValue}
        </p>
    </div>);
};

export default relatedCardItem;