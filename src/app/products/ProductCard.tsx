import { Product } from "@/data/products";

const ProductCard = (product: Product) => {
  return (
    <span
      key={product.id}
      className="p-5 rounded-xl border block shadow-md hover:rounded-lg transition-all cursor-pointer"
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        className="item-center rounded-xl w-full my-4"
      />
      <h3>{product.name}</h3>
      <h4>{product.description}</h4>
      <h5>{product.price}</h5>
    </span>
  );
};

export default ProductCard;
