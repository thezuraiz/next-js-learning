import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const ProductPage = () => {
  return (
    <>
      <div>Product Page</div>
      <span className="grid grid-cols-3 gap-3 p-4">
        {products.map((e) => ProductCard(e))}
      </span>
    </>
  );
};

export default ProductPage;
