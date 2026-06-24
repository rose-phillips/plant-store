import { createContext } from "react";


export type ProductInfoTypes = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

const plantDataContext = createContext<ProductInfoTypes[] | null>(null);

export default plantDataContext;