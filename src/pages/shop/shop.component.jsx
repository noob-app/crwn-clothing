import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CollectionsOverviewComponent from '../../components/collections-overview/collections-overview.component';

const ShopPage = () => (
  <div className="shop-page">
    <Switch>
      <Route component={CollectionsOverviewComponent} />
    </Switch>
  </div>
);

export default ShopPage;
