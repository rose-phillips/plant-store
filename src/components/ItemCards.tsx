import type { ProductInfoTypes } from "../types";


export const ItemCards = (item: ProductInfoTypes) => {



    return (
        <div className="item-card-container">
            <img src={item.image}/>
            <h5>{item.title}</h5>
            <p>{item.price}</p>
        </div>   
    );
};