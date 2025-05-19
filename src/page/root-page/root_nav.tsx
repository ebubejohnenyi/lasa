import { Outlet } from "react-router-dom";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import NewsLetter from "../../component/newsletter/newsletter";

const RootNavigation: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <NewsLetter
        title="Get Discount 20% Off"
        description="Subscribe our newsletter and get discount 20% off"
      />
      <Footer />
    </>
  );
};
export default RootNavigation;
