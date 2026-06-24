
import { useContext } from 'react';
import PlantDataContext from '../context/plantData';
import {ItemCards} from './ItemCards';

export const AllProducts = () => {

  const productInfo = useContext(PlantDataContext)

  return (
    <>
      <div className='all-products-page'>
        {productInfo && 
          productInfo.map((item) => (
          <ItemCards {...item} key={item.id}/>
      ))
        }
      </div>
    </>
      )
};