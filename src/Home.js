import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg'
          alt='amazon_main_background'
          className='home__image'
        />
        <div className='home__row'>
          <Product
            id={123}
            title="Can't hurt me"
            price={29.99}
            image='https://m.media-amazon.com/images/I/51Ln2UdUzhL.jpg'
            rating={5}
          />
          <Product
            id={234}
            title='Kindle Paperwhite Essentials Bundle including Kindle Paperwhite - Wifi, Ad-Supported, Amazon Leather Cover, and Power Adapter'
            price={134.97}
            image='https://m.media-amazon.com/images/I/61urewWApkL._AC_UY218_.jpg'
            rating={5}
          />
        </div>
        <div className='home__row'>
          <Product
            id={345}
            title="Under Armour Men's Charged Assert 8 Running Shoe"
            price={59.46}
            image='https://m.media-amazon.com/images/I/513DZ5zwCiL._AC_UL320_.jpg'
            rating={4}
          />
          <Product
            id={456}
            title="Wrangler Authentics Men's Long Sleeve Quilted Lined Flannel Shirt Jacket With Hood"
            price={16.99}
            image='https://m.media-amazon.com/images/I/91JqNJYhR2L._AC_UL320_.jpg'
            rating={4}
          />
          <Product
            id={567}
            title='Digital Alarm Clock,6 Large LED Display with Dual USB Charger Ports | Auto Dimmer Mode | Easy Snooze Function, Modern Mirror Desk Wall Clock'
            image='https://m.media-amazon.com/images/I/61sTM-l6t1L._AC_UL320_.jpg'
            price={99.99}
            rating={3}
          />
        </div>
        <div className='home__row'>
          <Product
            id={678}
            title='Hisense 55-Inch Class H8 Quantum Series Android 4K ULED Smart TV with Voice Remote (55H8G, 2020 Model)'
            image='https://m.media-amazon.com/images/I/81wLGLKUyzL._AC_UY218_.jpg'
            price={44.5}
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
