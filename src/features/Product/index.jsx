import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from './pages/ListPage';

function ProductFeature(props) {
  const match = useRouteMatch();

  return (
    <div>
      Product Feature
      <Switch>
        <Route path={match.url} exact component={ListPage} />
      </Switch>
    </div>
  );
}

export default ProductFeature;
