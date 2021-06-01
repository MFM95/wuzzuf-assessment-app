import React from 'react';

import classes from './CardLink.css';

const cardLink = (props) => {
    const { titleLink, url } = props;

    return (<div className={classes.CardLinkContainer}>
        <a href={url} className={classes.CardLink}>{titleLink}</a>
    </div>);
};

export default cardLink;