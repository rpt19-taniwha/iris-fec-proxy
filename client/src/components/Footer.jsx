import React from 'react';

function Footer() {
  return (
    <div id="footer-wrapper">
      <img id="footer-2" src="https://mervin-fec-service.s3-us-west-1.amazonaws.com/footer-2.png"></img>
      <div className="footer-list-wrapper">

      <div className="footer-shop-wrapper">
        <div className="footer-label">Shop</div>
        <ul className="footer-shop-list">
          <li id="footer-item">Gift cards</li>
          <li id="footer-item">Etsy blog</li>
        </ul>
      </div>

      <div className="footer-sell-wrapper">
        <div className="footer-label">Sell</div>
        <ul className="footer-sell-list">
          <li id="footer-item">Sell on Etsy</li>
          <li id="footer-item">Teams</li>
          <li id="footer-item">Forums</li>
          <li id="footer-item">Affiliates</li>
        </ul>
      </div>

      <div className="footer-about-wrapper">
        <div className="footer-label">About</div>
        <ul className="footer-sell-list">
          <li id="footer-item">Etsy, Inc.</li>
          <li id="footer-item">Policies</li>
          <li id="footer-item">Investors</li>
          <li id="footer-item">Careers</li>
          <li id="footer-item">Press</li>
        </ul>
      </div>

      <div className="footer-help-wrapper">
        <div className="footer-label">Help</div>
        <ul className="footer-sell-list">
          <li id="footer-item">Help Center</li>
          <li id="footer-item">Privacy settings</li>
        </ul>
        <button>Download the Etsy App</button>
      </div>

    </div>
    </div>
  )
}

export default Footer;