import HeaderNavigationContainer from "../../component/header_nav_container/header_nav_container";
import cssClasses from "./gallery.module.css";

const Gallery: React.FC = () => {
  return (
    <section>
      <HeaderNavigationContainer
        title="Home"
        currentPageTitle="Gallery"
        customClassName={cssClasses.container}
      />
      <h1>Gallery Page</h1>
    </section>
  );
};

export default Gallery;
