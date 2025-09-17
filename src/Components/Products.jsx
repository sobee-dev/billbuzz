import React from 'react'
import SingleProduct from './SingleProduct'

const Products = ({products, onSelect}) => {

        return (
            <div className='grid max-md:grid-cols-3 px-2'>
               
                {products.map(
                    (product, index) =>(
                        <SingleProduct key={index} name={product.name} price={product.price} description={product.description} onClick={() => onSelect(product)}/>
                   
                ))}
                
            </div>
  )
}

export default Products
