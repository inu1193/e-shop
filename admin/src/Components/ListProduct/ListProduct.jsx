import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {

  const [all_products, setAllProducts]=useState([])

  const fetchInfo=async()=>{
    await fetch('https://e-shop-v7kq.onrender.com/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)})
  }

  useEffect(()=>{
    fetchInfo()
  },[])
  const remove_product = async(id)=>{
    await fetch('https://e-shop-v7kq.onrender.com/removeproduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo()
  }

  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="list-product-allproducts">
        <hr />
        {all_products.map((product)=>{
          return <React.Fragment key={product.id}>
          <div className="listproduct-format-main listproduct-format">
            <img src={product.image} className="listproduct-product-icon" alt="" />
            <p>{product.name}</p>
            <p>{product.old_price}</p>
            <p>{product.new_price}</p>
            <p>{product.category}</p>
            <img
              onClick={() => {
                remove_product(product.id);
              }}
              src={cross_icon}
              className="listproduct-remove-icon"
              alt=""
            />
          </div>
          <hr />
        </React.Fragment>
        })}
      </div>
    </div>
  )
}

export default ListProduct
