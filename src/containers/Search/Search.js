import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import BuildControls from '../../components/Search/BuildControl/BuildControl';
import Card from '../../components/Card/Card';
import Spinner from '../../components/UI/Spinner/Spinner';
import Title from '../../components/UI/Title/Title';
import Description from '../../components/UI/Description/Description';
import RightSide from '../../components/RightSide/RightSide';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios';
import { fetchQueryJobs } from '../../store/actions/search';
import classes from './Search.css';

const search = props => {
    const { searchQueryValue, queryJobs = [], searchHistory = [], countJobs, loading, onFetchQueryJobs } = props;

    useEffect(() => {
        onFetchQueryJobs(searchQueryValue);
    }, []);

    let allJobs = <Spinner />;

    if (!loading) {
        allJobs = queryJobs.map(job => (
            <Card
                key={job.id}
                type={'search'}
                id={job.id}
                title={job.title}
                skills={job.skills} />
        ));
    }

    return (
        <Aux>
            <BuildControls />
            {loading
                ? <Title
                    paddingTop={33}
                    paddingLeft={48}
                    title={'“' + searchQueryValue + '” jobs'} />
                : <Title
                    paddingTop={33}
                    paddingLeft={48}
                    title={'“' + searchQueryValue + '” jobs (' + countJobs + ')'} />
            }

            <div className={classes.SearchContainer}>
                <div className={classes.SearchJobsContainer}>
                    {countJobs > 0
                        ? allJobs
                        : <Description paddingTop={22}
                            paddingLeft={39}
                            details={'No results found for the keyword “' + searchQueryValue + '”'} />}
                </div>
                <RightSide
                    type={'search'}
                    rightSideTitle={'Search history:'}
                    relatedItems={searchHistory} />
            </div>
        </Aux>
    );
};

const mapStateToProps = state => {
    return {
        searchQueryValue: state.search.queryValue,
        queryJobs: state.search.queryJobs,
        searchHistory: state.search.searchHistory,
        countJobs: state.search.count,
        loading: state.search.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchQueryJobs: (queryValue) => dispatch(fetchQueryJobs(queryValue))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(search, axios));