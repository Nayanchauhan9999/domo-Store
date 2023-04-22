import React from 'react'
import ProductsCard from './ProductCard'
import {productsData} from '../data/productData'

const Body = () => {
  return (
    <>
    <div className='home_content'>
    {productsData.map((value)=>{
      return  <ProductsCard key={value.id} img={value.img} rating={value.rating} title={value.title} price={value.price} id={value.id} quantity={value.quantity}/>
    })}
    </div>  
    </>
  )
}

export default Body