
import type { ProductInfoTypes } from '../types';
import {ItemCards} from './ItemCards';

export const AllProducts = ({ productInfo }: { productInfo: ProductInfoTypes[] }) => {


  return (
    <>
      <div className='all-products-page'>
      {productInfo.map((item) => (
        <ItemCards {...item} key={item.id}/>
      ))}
      </div>
      </>
      )
};