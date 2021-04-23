import React, {Fragment} from 'react';
import Home from './containers/Home';
import ProductPage from './containers/ProductPage';
import { Switch, Route } from "react-router-dom";

const App = (): JSX.Element => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component = {Home} />
        <Route path='/:id' component={ProductPage} /> 
      </Switch>
    </Fragment>
  );
}

export default App;
