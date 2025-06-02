import HeaderNavigationContainer from "../../component/header_nav_container/header_nav_container";
import GoogleMap from "../../component/map_block/google_map_block";
import MapWrapper from "../../component/map_block/map_wrapper";
import cssClasses from "./contact.module.css";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoAlarm } from "react-icons/io5";
import ContactCard from "./contact_card";
import ContactForm from "./component/contact_form";
import Divider from "../../component/divider/divider";

const Contact: React.FC = () => {
  return (
    <section>
      <HeaderNavigationContainer
        title="Home"
        currentPageTitle="Contact Us"
        customClassName={cssClasses.container}
      />
      <MapWrapper
        title="Contact"
        subTitle="Click on your nearest store location to set the road on Google Map."
      >
        <GoogleMap />
      </MapWrapper>
      <Divider />
      <section className={cssClasses.contact_card}>
        <ContactCard
          title="Our Store"
          subTitle="7021 Washington SQ. <br /> South New York, NY 10012"
          iconElement={<FaLocationDot color="#CC0000" size={35} />}
        />
        <ContactCard
          title="Contact Info"
          subTitle="Telephone: +234 123456789 <br />
            E-mail: lasa@gmail.com"
          iconElement={<FaPhoneVolume color="#CC0000" size={35} />}
        />
        <ContactCard
          title="Business Hours"
          subTitle="Monday - Sunday <br />
            09:00 am - 20:00pm"
          iconElement={<IoAlarm color="#CC0000" size={35} />}
        />
      </section>
      <ContactForm />
      <Divider />
    </section>
  );
};

export default Contact;
