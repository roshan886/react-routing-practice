import React from 'react'
import { Link } from 'react-router-dom'
function Product() {
  return (
  <div>
  
    <h1 className='text-9xl underline text-center'>Product</h1>

   <div className=' w-2 gap-4 my-4 flex items-center justify-center mx-auto  '> <Link to="/product/men">Mens  </Link>
     <Link to="/product/women">Women </Link></div>
  </div>
  )
}

export default Product