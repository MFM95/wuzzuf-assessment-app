import React, { Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Jobs/Jobs';

const Job = React.lazy(() => {
  return import('./containers/Jobs/Job/Job');
});

const Skill = React.lazy(() => {
  return import('./containers/Skill/Skill');
});

const Search = React.lazy(() => {
  return import('./containers/Search/Search');
});


const app = props => {
  let routes = (
    <Switch>
        <Route path="/search" render={(props) => <Search {...props}/>} />
        <Route path="/skill/:id" render={(props) => <Skill {...props}/>} />
        <Route path="/job/:id" render={(props) => <Job {...props}/>} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
    </Switch>
  );

  return (
    <div>
      <Layout>  
        <Suspense fallback=''>{routes}</Suspense>
      </Layout>
    </div>
  );
}

export default withRouter(app);
