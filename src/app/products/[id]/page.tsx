import { products } from "@/data/products";
import Image from "next/image";

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  const product = products.find((p) => p.id === params.id);
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <>
      <Image
        src={product.imageUrl}
        alt={product.name}
        height="1000"
        width="1000"
      />
      <h3>{product.name}</h3>
      <h4>{product.description}</h4>
      <h5>{product.price}</h5>
    </>
  );
};
export default ProductDetailPage;
