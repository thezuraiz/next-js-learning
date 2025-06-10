import { Product } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

const ProductCard = (product: Product) => {
  return (
    <Link href={"/products/" + product.id} key={product.id}>
      <span className="p-5 rounded-xl border block shadow-md hover:rounded-lg transition-all cursor-pointer">
        <Image
          // For internal url use src= {'/'+product.imageUrl}
          src={product.imageUrl}
          height={300}
          width={400}
          alt={product.name}
          className="item-center rounded-xl w-full my-4"
        />
        <h3>{product.name}</h3>
        <h4>{product.description}</h4>
        <h5>{product.price}</h5>
      </span>
    </Link>
  );
};

export default ProductCard;
