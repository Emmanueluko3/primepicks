import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: any;
  image: string;
  title: string;
  price: number | string;
  oldPrice: number | string | null;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  price,
  oldPrice,
}) => {
  return (
    <Link
      to={`/explore/${id}`}
      className="w-full rounded-2xl hover:bg-[#fff] hover:drop-shadow-2xl cursor-pointer"
    >
      <div className="h-[310px]">
        <img src={image} className="w-full h-full rounded-t-2xl" alt="Laptop" />
      </div>
      <div className="p-4">
        <p className="text-[16px] text-[#2F2F2F]">{title}</p>
        <h3 className="text-[16px] font-bold">N {price}</h3>
        <p className="text-sm text-gray-400 line-through">N {oldPrice}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
