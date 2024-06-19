import React from 'react';
import './item.css';
import { Link } from 'react-router-dom';
import defaultImage from '../Assets/default_image.jpg'; // Ensure the correct path to your default image

const Item = (props) => {
  // const handleImageError = (e) => {
  //   e.target.src = defaultImage;
  // };

  return (
    <Link to={`/product/${props.id}`} className='item'>
      <img 
        src={props.image} 
        // onError={handleImageError} 
        onClick={() => window.scrollTo(0, 0)} 
        alt={props.name}
      />
      <p>{props.name}</p>
      <div className='item-prices'>
        <div className="item-price-new">₹{props.new_price}</div>
        <div className="item-price-old">₹{props.old_price}</div>
      </div> 
    </Link>
  );
};

export default Item;
