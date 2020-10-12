import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Main from '../views/main/Main';

export default () => [
  <Route path="/" render={() => <Redirect to="/main" />} exact />,
  <Route path="/main" component={Main} />,
];
