import React from 'react';

import SearchInput from '../../UI/SearchInput/SearchInput';
import AutoComplete from '../AutoComplete/AutoComplete';
import classes from './BuildControl.css';

const buildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.BuildControlSearch}>
        <SearchInput />
        <AutoComplete />
      </div>
    </div>
  );
};

export default buildControl;