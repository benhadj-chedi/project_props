import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((element, index) => (
        <div key={index}>
          <ProductCard product={element} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
