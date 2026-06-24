import { useLoaderData } from "react-router";


export const Product = () => {


      const plant = useLoaderData();

    console.log("DATA:", plant);
  return (
    <div>
      <h2>{plant.title}</h2><p>{plant.price}</p>
      <img src={plant.image} style={{ width: "200px" }}alt={plant.title} />
      <p>{plant.description}</p>
    </div>
  )
}
