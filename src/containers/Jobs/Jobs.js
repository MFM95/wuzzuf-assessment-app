import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";

import Aux from '../../hoc/Aux/Aux';
import BuildControls from '../../components/Search/BuildControl/BuildControl';
import Card from '../../components/Card/Card';
import Spinner from '../../components/UI/Spinner/Spinner';
import Title from '../../components/UI/Title/Title';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios';
import { fetchJobs, reSetCountJobs } from '../../store/actions/jobs';
import { setQueryValue, reSetQueryJobs } from '../../store/actions/search';
import { reSetAutoCompleteJobs } from '../../store/actions/autoComplete';
import classes from './Jobs.css';

const jobs = props => {
    const { jobs=[], countJobs, nextOffset, loading, onFetchJobs, onSetQueryValue, onReSetQueryJobs, onReSetAutoCompleteJobs, onReSetCountJobs } = props;

    const fetchMoreData = () => {
        setTimeout(() => {
            onFetchJobs(nextOffset, 12);
        }, 100);
    };

    useEffect(() => {
        onSetQueryValue('');
        onReSetQueryJobs([]);
        onReSetAutoCompleteJobs();
        onReSetCountJobs();
        onFetchJobs(0, 12);
    }, [onFetchJobs]);

    let allJobs = <Spinner />;

    if(!loading) {
        allJobs = <InfiniteScroll
        dataLength={jobs.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<div className={classes.Loader}><div></div><div></div><div></div><div></div></div>}
    >
        {jobs.map(job => (
            <Card
                key={job.id}
                type={'jobs'}
                id={job.id}
                title={job.title}
                skills={job.skills} />
        ))}
    </InfiniteScroll>
    }

    return (
        <Aux>
            <BuildControls />
            <Title
                paddingTop={32}
                paddingLeft={63}
                title={'All Jobs (' + countJobs + ')'} />
            <div className={classes.JobsContainer}>
               {allJobs}
            </div>
        </Aux>
    );
};

const mapStateToProps = state => {
    return {
        jobs: state.jobs.jobs,
        countJobs: state.jobs.count,
        nextOffset: state.jobs.nextOffset,
        loading: state.jobs.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchJobs: (offset, limit ) => dispatch(fetchJobs(offset, limit)),
        onSetQueryValue: (queryValue) => dispatch(setQueryValue(queryValue)),
        onReSetQueryJobs: (queryJobs) => dispatch(reSetQueryJobs(queryJobs)),
        onReSetAutoCompleteJobs: () => dispatch(reSetAutoCompleteJobs()),
        onReSetCountJobs: () => dispatch(reSetCountJobs()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(jobs, axios));
