import { Product } from "./../model/product/product";
import { useQuery } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();
const fetchProducts = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/ebubejohnenyi/6c7234bc14d71bc47ad92bbea08a693d/raw/22bb98619fedc97ec7a7584d16e03d14efa33774/gistfile1.txt"
  );
  if (!response.ok) {
    throw new Error("Unable to Fetch Products..");
  }
  const data = response.json();
  return data;
};

export const useFetch = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
