import { useLoaderData } from "react-router";

export const Product = () => {

  const plant = useLoaderData();

  return (
    <div>
      <h2>{plant.title}</h2><p>{plant.price}</p>
      <img className="plantpage-img" src={plant.image} alt={plant.title} />
      <p>{plant.description}</p>
    </div>
  )
}
