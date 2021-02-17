import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product(props) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch the action
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{props.title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className='product__rating'>
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon className='product__starRating' />
              </p>
            ))}
        </div>
      </div>
      <img src={props.image} alt="can't_hurt_me" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
