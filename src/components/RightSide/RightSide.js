import React from 'react';

import SubTitle from '../UI/SubTitle/SubTitle';
import RightSideItems from './RightSideItems/RightSideItems';
import classes from './RightSide.css';

const rightSide = (props) => {
    const { relatedItems, rightSideTitle, type, keyTitle } = props;

    return (<div className={classes.RightSideContainer}>
        <SubTitle paddingTop={26}
            paddingLeft={25}
            title={rightSideTitle} />
        <RightSideItems
            type={type}
            keyTitle={keyTitle}
            relatedItems={relatedItems} />
    </div>);
};

export default rightSide;