import { useEffect, useState } from "react";
import { Category, Product } from "../model/product/product";

export const useCategory = (products: Product[], initialCategory: Category) => {
  const [category, setCategory] = useState<Product[]>([]);

  useEffect(() => {
    const productCategory = products.filter(
      (product) => product.category === initialCategory
    );

    if (productCategory != undefined || productCategory != null) {
      setCategory(productCategory);
    }
  }, [products, initialCategory]);
  return category;
};
