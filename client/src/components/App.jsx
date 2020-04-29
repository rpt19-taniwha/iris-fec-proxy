import React from 'react';
import Search from './Search.jsx';
import Menu from './Menu.jsx';
import Footer from './Footer.jsx';
import Seller from './Seller.jsx';
import Subscribe from './Subscribe.jsx';
import Terms from './Terms.jsx';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Search/>
        <Menu/>
        <div id="content-wrapper">
          <div className="left-wrapper">
            <div id="image"></div>
            <div id="root"></div>
          </div>
          <div className="right-wrapper">
            <div id="product-service"></div>
            <Seller/>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <div id='youmayalsolike'></div>
          </div>
          <div className="col-sm-1"></div>
        </div>
        <Subscribe/>
        <Footer/>
        <Terms/>
      </div>
    )
  }
}

export default App;