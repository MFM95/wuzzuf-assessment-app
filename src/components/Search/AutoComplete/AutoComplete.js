import React from 'react';
import { connect } from 'react-redux';

import Spinner from '../../UI/Spinner/Spinner';
import { setQueryValue, setSearchHistory } from '../../../store/actions/search';
import { reSetAutoCompleteJobs } from '../../../store/actions/autoComplete';

import classes from './AutoComplete.css';

const autoComplete = (props) => {
    const { queryJobs, loading, count, onSetQueryValue, onSetSearchHistory, onReSetAutoCompleteJobs } = props;

    const clickHandler = (value) => {
        onSetQueryValue(value);
        onSetSearchHistory(value);
        onReSetAutoCompleteJobs();
        window.location = 'search';
    }

    let AutoCompleteContainer = <Spinner />;

    if(!loading) {
        AutoCompleteContainer = queryJobs.map(job => (
            <li key={job} onClick={() => clickHandler(job)} className={classes.AutoCompleteListItem}>
                   {job}
            </li>
        ))
    }

    return (
        <div className={count > 0 ? classes.AutoCompleteContainer : classes.AutoCompleteHiddenContainer}>
            <ul className={classes.AutoCompleteList}>
                {AutoCompleteContainer}
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        queryJobs: state.autoComplete.queryJobs,
        count: state.autoComplete.count,
        loading: state.autoComplete.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetQueryValue: (queryValue) => dispatch(setQueryValue(queryValue)),
        onSetSearchHistory: (queryValue) => dispatch(setSearchHistory(queryValue)),
        onReSetAutoCompleteJobs: () => dispatch(reSetAutoCompleteJobs())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(autoComplete);