import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Product from './components/Product/Product';
import ProductCategories from './components/ProductCategories/ProductCategories';
import ProductCards from './components/ProductCards/ProductCards';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div style={{backgroundColor:'#F5F7FA'}}>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
