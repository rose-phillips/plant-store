import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, type LoaderFunctionArgs } from "react-router";
import { RouteLayout } from './components/RouteLayout';
import Home from './components/Home';
import { AllProducts } from './components/AllProducts';
import { Product } from './components/Product';
import { AboutUs } from './components/AboutUs';


function App() {
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
          <Route path='/all-products' element={<AllProducts/>}/>
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
