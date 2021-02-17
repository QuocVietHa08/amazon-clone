import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';
import Footer from './Footer';

const promise = loadStripe(
  'pk_test_51ILUJEI95v2mAhMo3bt4Ffu24Gc8oBtEHI644LUQJFqxy39QSQqSagxYRoUB6sooyEIwvEAsQkbhZJIAJNk7RQCi001p310oTY'
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // this will run once when the app component loads.
    auth.onAuthStateChanged((authUser) => {
      console.log('the user >>>>', authUser);
      if (authUser) {
        // the user is logging in or the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the use was logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  });
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path='/orders'>
            <Header />
            <Orders />
            <Footer />
          </Route>

          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path='/'>
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
