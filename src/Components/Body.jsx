import React from 'react'
import ProductsCard from './ProductCard'
import productsData from '../data/productData'

const Body = () => {
  return (
    <>
    <div className='home_content'>
    {productsData.map((value)=>{
      return  <ProductsCard key={value.id} img={value.img} rating={value.rating} title={value.title} price={value.price}/>
    })}
    </div>  
    </>
  )
}

export default Body