import React from 'react';
import Link from 'next/link';
const isServer = typeof window === 'undefined';
const WOW = !isServer ? require('wowjs') : null;

class Banner extends React.Component {
  componentDidMount() {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 20,
      mobile: true,
      live: true
    }).init();
  }

  render() {
    return (
      <React.Fragment>
        <div className="main-banner marketing-home">
          <img src="/images/banner.png"/>
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="hero-content">
                      <h1>Where</h1>
                      <h1>words</h1>
                      <h1>fail,</h1> 
                      <h1>Music</h1>
                      <h1>speaks.</h1>                     

                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </React.Fragment>
    );
  }
}

export default Banner;
