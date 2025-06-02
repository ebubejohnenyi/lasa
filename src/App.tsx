import Home from "./page/home-page/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootNavigation from "./page/root-page/root_nav";
import ShopPage from "./page/shop/shop_page";
import Contact from "./page/contact-page/contact";
import Gallery from "./page/gallery/gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootNavigation />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <ShopPage /> },
      { path: "gallery", element: <Gallery /> },
      { path: "contact-us", element: <Contact /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
