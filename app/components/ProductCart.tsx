import React from 'react'
import AddToCart from './AddToCart';
import styles from './ProductCart.module.css';


const ProductCart = () => {
  return (
    <div className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-600">
        <AddToCart />
    </div>
  )
}

export default ProductCart
