import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import { RouteLayout } from './components/RouteLayout';
import Home from './components/Home';
import { AllProducts } from './components/AllProducts';
import { Product } from './components/Product';
import { AboutUs } from './components/AboutUs';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouteLayout/>}>
          <Route index element={<Home/>} />
          <Route path='/all-products' element={<AllProducts/>}/>
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
      </Route>
    )
  )


  return (
  <RouterProvider router={router} />
  )
}

export default App
