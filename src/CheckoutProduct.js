import React from 'react';
import './CheckoutProduct.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';
function CheckoutProduct(props) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({ type: 'REMOVE_FROM_BASKET', id: props.id });
  };
  return (
    <div class='checkoutProduct'>
      <img
        className='checkoutProduct__image'
        src={props.image}
        alt='product__image'
      />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{props.title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon className='product__starRating' />
              </p>
            ))}
        </div>
        {!props.hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
