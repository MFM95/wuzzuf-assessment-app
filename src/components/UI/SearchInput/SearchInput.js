import React from 'react';
import { connect } from 'react-redux';

import searchIcon from '../../../assets/images/Vector.png';
import { setQueryValue, setSearchHistory } from '../../../store/actions/search';
import { fetchAutoCompleteJobs, reSetAutoCompleteJobs } from '../../../store/actions/autoComplete';
import classes from './SearchInput.css';

const searchInput = (props) => {
    const { queryValue, onSetQueryValue, onSetSearchHistory, onFetchAutoCompleteJobs, onReSetAutoCompleteJobs } = props;

    const handleChange = (event) => {
        onSetQueryValue(event.target.value);
        if(event.target.value.length >= 3){
            onFetchAutoCompleteJobs(event.target.value);
        }else{
            onReSetAutoCompleteJobs();
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if(queryValue.length >= 3){
            onSetSearchHistory(queryValue);
            onReSetAutoCompleteJobs();
            window.location = 'search';
        }
    }

    return (<div className={classes.searchInputGroup}>
            <form onSubmit={submitHandler}>
            <input onChange={handleChange} type="text" className={queryValue? classes.searchInputWithValue: classes.searchInput} value={queryValue? queryValue: ''} placeholder={'search keyword'} />
            <button className={classes.SearchButton} type="submit">
                <img className={classes.SearchIcon} src={searchIcon} alt="SearchIcon" />
            </button>
            </form>
    </div>);
};

const mapStateToProps = state => {
    return {
        queryValue: state.search.queryValue,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetQueryValue: (queryValue) => dispatch(setQueryValue(queryValue)),
        onSetSearchHistory: (queryValue) => dispatch(setSearchHistory(queryValue)),
        onFetchAutoCompleteJobs: (queryValue) => dispatch(fetchAutoCompleteJobs(queryValue)),
        onReSetAutoCompleteJobs: () => dispatch(reSetAutoCompleteJobs()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(searchInput);
