import Home from "./page/home-page/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootNavigation from "./page/root-page/root_nav";
import ShopPage from "./page/shop/shop_page";
import Contact from "./page/contact-page/contact";
import Gallery from "./page/gallery/gallery";
import ProductDetail from "./page/product/product_detail";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./hooks/useFetch";
import { loader as productDetailsLoader } from "./page/product/product_detail";
import ShopRoot from "./page/shop/shop_root";
import { ToastContainer } from "react-toastify";
import "./index.css";
import FeatureCategoryRoot from "./component/feature_category_root/feature_category_root";
import MobileCart from "./page/mobile_cart/mobile_cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootNavigation />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <ShopRoot />,
        children: [
          {
            index: true,
            element: <ShopPage />,
          },
          {
            path: ":id",
            id: "product-detail",
            loader: productDetailsLoader,
            element: <ProductDetail />,
            errorElement: (
              <div>
                <h1>Error Occurred! Product Not Found</h1>
              </div>
            ),
          },
        ],
      },
      { path: "gallery", element: <Gallery /> },
      { path: "contact-us", element: <Contact /> },
      { path: "cart", element: <MobileCart /> },
      {
        path: "feature-category",
        element: <FeatureCategoryRoot />,
        children: [],
      },
    ],
  },
]);
function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        style={{ zIndex: 9999, backgroundColor: "transparent" }}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className={"toastContainer"}
      />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
