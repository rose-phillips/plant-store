import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, type LoaderFunctionArgs } from "react-router";
import { RouteLayout } from './components/RouteLayout';
import Home from './components/Home';
import { AllProducts } from './components/AllProducts';
import { Product } from './components/Product';
import { AboutUs } from './components/AboutUs';
import type { ProductInfoTypes } from './types';
import { useEffect, useState } from 'react';


function App() {

    const [productInfo, setProductInfo] = useState<ProductInfoTypes[]>([]);
  
    //getdata
    useEffect(() => {
      fetch('http://localhost:3000/products')
        .then((response) => response.json())
        .then((data) => setProductInfo(data))
        .catch((error) => console.log(error));
    }, []);

    async function loadPlantData({ params }: LoaderFunctionArgs) {
    const response = await fetch(`http://localhost:3000/products/${params.id}`);
    const data = await response.json();
    console.log(params)
    return data;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouteLayout/>}>
          <Route index element={<Home/>} />
          <Route path='/all-products' element={<AllProducts productInfo={productInfo}/>}/>
          <Route path="/products/:id" element={<Product />} loader={loadPlantData}/>
          <Route path="/about-us" element={<AboutUs/>}/>
      </Route>
    )
  )



  return (
  <RouterProvider router={router} />
  )
}

export default App
