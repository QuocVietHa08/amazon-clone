import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <div className='footer'>
      <div className='footer__container'>
        {/* Get to know use */}
        <div className='footer__info'>
          <p>
            <a href='#'>Careers</a>
          </p>
          <p>
            <a>Blog</a>
          </p>
          <p>
            <a>About amazong</a>
          </p>
          <p>
            <a>Amazone device</a>
          </p>
        </div>
        {/* make money with use */}
        <div className='footer__info'>
          <p>
            <a>Sell product on Amazong</a>
          </p>
          <p>
            <a>Buy product on Amazong</a>
          </p>
          <p>
            <a>Give your product to use</a>
          </p>
          <p>
            <a>Become a afffiliate</a>
          </p>
        </div>
        {/* amazon payment product */}
        <div className='footer__info'>
          <p>
            <a>Amazone Business Card</a>
          </p>
          <p>
            <a>Shop with Point</a>
          </p>
          <p>
            <a>Reload your Balance</a>
          </p>
          <p>
            <a>Amazone currency Converter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
