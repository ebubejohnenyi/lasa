import { useEffect, useState } from "react";
import { Product, Size } from "../model/product/product";

export const useSize = (products: Product[], initialCategory: Size) => {
  const [size, setSize] = useState<Product[]>([]);

  useEffect(() => {
    const productSize = products.filter(
      (product) => product.size === initialCategory
    );

    if (productSize != undefined || productSize != null) {
      setSize(productSize);
    }
  }, [products, initialCategory]);
  return size;
};
