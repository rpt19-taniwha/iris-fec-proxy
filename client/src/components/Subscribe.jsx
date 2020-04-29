import React from 'react';

function Subscribe() {
  return (
    <div id="subscribe-container">
      <img id="footer-1" src="https://mervin-fec-service.s3-us-west-1.amazonaws.com/footer-1.png"></img>
      <div className="subscribe-wrapper">
        <div className="subscribe-text">Yes! Send me exclusive offers, unique gift ideas, and personalized tips for shopping and selling on Etsy.</div>
        <div className="subscribe-input-wrapper">
          <input className="subscribe-input" type="email" placeholder="Enter your email" autoComplete="off" autoCorrect="off" autoCapitalize="off"/>
          <div className="subscribe-input-button-wrapper">
            <button className="subscribe-input-button">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe;