import React from 'react';

function Search() {
  return (
    <div id="search-wrapper">
      <img src="https://mervin-fec-service.s3-us-west-1.amazonaws.com/etsy.png" id="etsy"/>

      <div className="search-input-wrapper">
        <input className="search-input" type="text" placeholder="Search for items or shops" autoComplete="off" autoCorrect="off" autoCapitalize="off"/>
        <button className="search-input-button"><img className="search-input-button-icon" src="https://mervin-fec-service.s3-us-west-1.amazonaws.com/search.png"/></button>
      </div>

      <button className="search-signin-button">Sign in</button>

      <div className="cart-wrapper">
        <img src="https://mervin-fec-service.s3-us-west-1.amazonaws.com/cart.png" id="cart"/>
      </div>

    </div>
  )
}

export default Search;

