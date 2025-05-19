import Home from "./page/home-page/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootNavigation from "./page/root-page/root_nav";
import ShopPage from "./page/shop/shop_page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootNavigation />,
    children: [
      { path: "", element: <Home /> },
      { path: "shop-page", element: <ShopPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
