import React, { use, useEffect, useState } from 'react'
import type { ProductInfoTypes } from '../types'
import {ItemCards} from './ItemCards';

export const AllProducts = () => {

  const [productInfo, setProductInfo] = useState<ProductInfoTypes[]>([]);
  console.log("productInfo")

  //getdata
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => setProductInfo(data))
      .catch((error) => console.log(error));
  }, []);



  return (
    <>
      <div>AllProducts</div>
      <div className='all-products-page'>
      {productInfo.map((item) => (
        <ItemCards {...item}/>
      ))}
      </div>
      </>
      )
};