import { useEffect, useState } from "react";
import type { ProductInfoTypes } from "./plantData";
import PlantDataContext from './plantData'


export const PlantDataProvider = ({children}: {children: React.ReactNode}) => {

      const [productInfo, setProductInfo] = useState<ProductInfoTypes[]>([]);

          //getdata
    useEffect(() => {
      fetch('http://localhost:3000/products')
        .then((response) => response.json())
        .then((data) => setProductInfo(data))
        .catch((error) => console.log(error));
    }, []);

  return (
   
    <PlantDataContext.Provider value={productInfo}>{children}</PlantDataContext.Provider>
  )
}
