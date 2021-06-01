import React from 'react';

import RightSideItem from './RightSideItem/RightSideItem';
import classes from './RightSideItems.css';

const rightSideItems = ( props ) => {
    const { relatedItems, type } = props;

    let RelatedItems = relatedItems.map(item => (
        type === 'job'
            ? <RightSideItem
                key={item.uuid}
                type={type}
                id={item.uuid}
                url={'/' + type + '/' + item.uuid}
                title={item.title} />
            : type === 'search'
                ? <RightSideItem
                    key={item}
                    type={type}
                    title={item} />
                : <RightSideItem
                    key={item.uuid}
                    type={type}
                    id={item.uuid}
                    url={'/' + type + '/' + item.uuid}
                    title={item.skill_name} />
    ));

    return (
        <div className={classes.RightSideItemsContainer}>
            {RelatedItems}
        </div>
    );
};

export default rightSideItems;