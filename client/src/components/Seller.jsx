import React from 'react';

function Seller() {
  return (
    <div id="seller-service-container">
      <div className="shipping-wrapper">
        <div className="ready-to-ship">
          <span className="cost-label">Ready to ship in</span>
          <span className="ready-to-ship-time">3-5 business days</span>
        </div>
        <div className="ship-from">
          <span className="cost-label">From</span>
          <span className="ship-from-location">United States</span>
        </div>
      </div>
      <div className="cost-to-ship">
          <span className="cost-label">Cost to ship</span>
          <span className="cost-to-ship-amount">Free</span>
      </div>
      <button className="deliver-to">
        <div className="deliver-to-text">Deliver to United States</div>
        <div className="deliver-to-arrow">^</div>
      </button>

      <button className="faqs">
        <div className="faqs-text">FAQs</div>
        <div className="faqs-arrow">^</div>
      </button>

      <div className="meet-seller">Meet your seller</div>

      <div className="user-profile">
        <img alt="gail93" src="https://i.picsum.photos/id/59/75/75.jpg"></img>
        <div className="user-info">
          <div className="username">Clare Vacha</div>
          <div className="username-owner">Owner of <a>ClareVacha</a></div>
        </div>
      </div>

      <button className="message-username">Message Clare</button>
    </div>
  )
}

export default Seller;