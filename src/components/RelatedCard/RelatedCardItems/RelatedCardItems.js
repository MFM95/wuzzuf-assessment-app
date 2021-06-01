import React from 'react';

import RelatedCardItem from './RelatedCardItem/RelatedCardItem';
import classes from './RelatedCardItems.css';

const relatedCardItems = ( props ) => {
    const { relatedCardItems } = props;

    let RelatedCardItems = relatedCardItems.map(item => (
        <RelatedCardItem
            key={item.keyTitle}
            keyTitle={item.keyTitle}
            keyValue={item.keyValue} />
    ));

    return (
        <div className={classes.RelatedCardItemsContainer}>
            {RelatedCardItems}
        </div>
    );
};

export default relatedCardItems;