import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import { db } from './firebase';
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState('');
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    //generate a special stripe that allows use to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  console.log('hello >>>', clientSecret);
  // handle submit function
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    //do stripe work
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation
        db.collection('users')
          .doc(user?.uid)
          .collections('orders')
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: 'EMPTY_BASKET',
        });
        history.replace('/orders');
      });
  };
  //handleChange function
  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };
  return (
    <div className='payment'>
      <div className='payment__container'>
        <h2>
          Checkout <Link to='/checkout'>{basket?.length} items</Link>
        </h2>
        {/* deliver-address */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>Ha Noi, Son Tay</p>
            <p>999 Ha noi Strees</p>
          </div>
        </div>
        {/* review-item */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment__items'>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                rating={item.rating}
                title={item.title}
                price={item.price}
              />
            ))}
          </div>
        </div>
        {/* payment-method */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment method</h3>
          </div>
          <div className='payment__details'>
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className='payment__priceContainer'>
                <CurrencyFormat
                  renderText={(value) => <h3>Order total:{value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType='text'
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing...</p> : 'Buy Now'}</span>
                </button>
              </div>
              {/* Error */}
              {error && <p>{error.message}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
