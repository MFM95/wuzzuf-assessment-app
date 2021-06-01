import React from 'react';

import RelatedCardTitle from '../RelatedCard/RelatedCardTitle/RelatedCardTitle';
import RelatedCardDetails from '../RelatedCard/RelatedCardDetails/RelatedCardDetails';
import RelatedCardItems from '../RelatedCard/RelatedCardItems/RelatedCardItems';
import classes from './RelatedCard.css';

const relatedCard = ( props ) => {

    const { title, details, url, relatedCardItems, minHeight} = props;

    return (
        <div className={classes.RelatedCardContainer} style={{minHeight: minHeight}}>
            <RelatedCardTitle title={title} url={url} />
            <RelatedCardDetails details={details} />
            <RelatedCardItems relatedCardItems={relatedCardItems} />
        </div>
    );
};

export default relatedCard;