import React from 'react';

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      hover: null,
      menu: ['Accessories', 'Bags & Purses', 'Necklaces', 'Rings', 'Earrings', 'Bracelets', 'Body Jewelry']
    }

  }

  mouseEnter (e) {
    this.setState({
      hover: e.target.innerText
    })
  }
  mouseLeave () {
    this.setState({
      hover: null
    })
  }
  popupEnter(e) {
    this.setState({
      hover: 'popup'
    })
  }
  popupLeave() {
    this.setState({
      hover: null
    })
  }

  render() {
    if (this.state.hover) {
      return (
        <div id="menu">
          <div id="menu-wrapper">
            <ul className="menu-list">
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Jewelry & Accessories</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Clothing & Shoes</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Home & Living</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Wedding & Party</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Toys & Entertainment</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Art & Collectibles</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Craft Supplies</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Vintage</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}><img className="gift" src="https://mervin-fec-service.s3-us-west-1.amazonaws.com/gift.png"></img>Gifts</li>
            </ul>
          </div>
          <hr className="divider"></hr>
          <div id="menu-popup-wrapper" onMouseEnter={(e) => this.popupEnter(e)} onMouseLeave={()=> this.popupLeave()} >
            <div className="menu-popup-list" >
              <div className="menu-popup-item-wrapper1">
                <div className="menu-popup-item-topic">All Jewelry & Accessories</div>
              </div>
              {this.state.menu.map((each, index) => {
                return (<div className="menu-popup-item-wrapper"><div id="menu-popup-item" key={index}>{each}</div></div>)
              })}
              <div className="menu-popup-item-wrapper1">
                <div className="menu-popup-item-topic">All Jewelry</div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="menu">
          <div id="menu-wrapper">
            <ul className="menu-list">
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Jewelry & Accessories</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Clothing & Shoes</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Home & Living</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Wedding & Party</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Toys & Entertainment</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Art & Collectibles</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Craft Supplies</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}>Vintage</li>
              <li id="menu-item" onMouseEnter={(e) => this.mouseEnter(e)} onMouseLeave={()=> this.mouseLeave()}><img className="gift" src="https://mervin-fec-service.s3-us-west-1.amazonaws.com/gift.png"></img>Gifts</li>
            </ul>
          </div>
          <hr className="divider"></hr>
        </div>
      )
    }

  }
}

export default Menu;

console.shallowCloneLog = function(){
  var typeString = Function.prototype.call.bind(Object.prototype.toString)
  console.log.apply(console, Array.prototype.map.call(arguments, function(x){
    switch (typeString(x).slice(8, -1)) {
      case 'Number': case 'String': case 'Undefined': case 'Null': case 'Boolean': return x;
      case 'Array': return x.slice();
      default:
        var out = Object.create(Object.getPrototypeOf(x));
        out.constructor = x.constructor;
        for (var key in x) {
          out[key] = x[key];
        }
        Object.defineProperty(out, 'constructor', {value: x.constructor});
        return out;
    }
  }));
}

const jewelryAccessories = ['Accessories', 'Bags & Purses', 'Necklaces', 'Rings', 'Earrings', 'Bracelets', 'Body Jewelry'];
const clothingShoes = [`Women's`, `Men's`, `Kids' & Baby`, 'Bags & Purses'];
// const homeLiving;
// const weddingParty;
// const toysEntertainment;
// const artCollectibles;
// const craftSupplies;
// const vintage;
// const gifts;