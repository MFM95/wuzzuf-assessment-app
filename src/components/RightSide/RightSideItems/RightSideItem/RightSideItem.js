import React from 'react';
import { connect } from 'react-redux';

import { setQueryValue } from '../../../../store/actions/search';
import classes from './RightSideItem.css';

const rightSideItem = (props) => {
    const { url, title, type, onSetQueryValue } = props;

    const clickHistoryHandler = () => {
        onSetQueryValue(title);
        window.location = 'search';
    } 

    return (<div className={classes.RightSideItemContainer}>
        <span className={classes.RightSideItemDot}></span>
        {type === 'search' 
        ? <a onClick={clickHistoryHandler} className={classes.RightSideItemTitle}>{title}</a>
        : <a href={url} className={classes.RightSideItemTitle}>{title}</a>}
    </div>);
};

const mapDispatchToProps = dispatch => {
    return {
        onSetQueryValue: (queryValue) => dispatch(setQueryValue(queryValue)),
    };
};

export default connect(null, mapDispatchToProps)(rightSideItem);
