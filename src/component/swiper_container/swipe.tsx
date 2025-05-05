// Import Swiper styles
import "swiper/swiper-bundle.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import chair3 from "../../assets/png/3.png";
import chair4 from "../../assets/png/4.png";
import chair5 from "../../assets/png/5.png";
import chair6 from "../../assets/png/6.png";

import "../../index.css";
// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  EffectFade,
  Autoplay,
} from "swiper";
import SwiperContent from "./swiper_content";

const Swipe: React.FC = () => {
  return (
    <>
      <Swiper
        effect="fade"
        fadeEffect={{ crossFade: true }} // Optional for smoother blend
        speed={1800}
        cssMode={false} // Important: disable cssMode to use fade
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        modules={[
          Navigation,
          Pagination,
          Mousewheel,
          Keyboard,
          EffectFade,
          Autoplay,
        ]}
      >
        <SwiperSlide>
          <SwiperContent
            title="NEW ARRIVALS"
            content1="Petra VB3 Viggo Beoson 1994"
            description="Designer chair styles for every space"
            descriptionStrong="Free shipping"
            buttonTitle="Buy Now"
            imagePath={chair5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContent
            title="NEW ARRIVALS"
            content1="Dc Martin Singapore Futuristic 1994"
            description="Designer chair styles for every space"
            descriptionStrong="Free shipping"
            buttonTitle="Explore Now"
            imagePath={chair6}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContent
            title="NEW ARRIVALS"
            content1="Simple Wood Chair Collection"
            description="Designer chair styles for every space"
            descriptionStrong="Free shipping"
            buttonTitle="Buy Now"
            imagePath={chair3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContent
            title="NEW ARRIVALS"
            content1="Petra VB3 Viggo Beoson 1994"
            description="Designer chair styles for every space"
            descriptionStrong="Free shipping"
            buttonTitle="Buy Now"
            imagePath={chair4}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Swipe;
