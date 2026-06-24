import { Link } from "react-router";
import type { ProductInfoTypes } from "../types";


export const ItemCards = (item: ProductInfoTypes) => {



    return (
        <Link className="item-link" to={`/products/${item.id}`} key={item.id}>
        <div className="item-card-container">
            <img src={item.image} alt="plant-photo"/>
            <h5>{item.title}</h5>
            <p>£{item.price}</p>
        </div>  
        </Link> 
    );
};