import React from 'react';
import Home from './containers/Home/Home';
import ProductList from './components/ProductList/ProductList';

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <Home />
      <ProductList />
    </React.Fragment>
  );
}

export default App;
