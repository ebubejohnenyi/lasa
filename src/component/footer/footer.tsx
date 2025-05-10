import cssClasses from "./footer.module.css";
import logo from "../../assets/png/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneVolume,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoMailOpenOutline } from "react-icons/io5";

const Footer: React.FC = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <section className={cssClasses.container}>
          <div>
            <img src={logo} alt={logo} />
            <h3>
              Follow us on Social:
              <FaFacebook size={25} color="grey" />
              <FaInstagram size={25} color="grey" />
              <FaTwitter size={25} color="grey" />
              <FaYoutube size={25} color="grey" />
            </h3>
          </div>
          <div>
            <h3>
              <FaPhoneVolume size={25} color="grey" /> Do You Need Help?
            </h3>
            <h1>+00 0123456789</h1>
          </div>
          <div>
            <h3>
              {" "}
              <CiLocationOn size={25} color="grey" />
              102 Princess Street, Toronto, Venice, Ca 124
            </h3>
            <h3>
              {" "}
              <IoMailOpenOutline size={25} color="grey" />
              contact@example.com
            </h3>
          </div>
        </section>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={cssClasses.lastFooter}>
          <div>
            @ 2024 <strong style={{ color: "#C10000" }}>Lasa</strong> All rights
            reserved
          </div>
          <ul>
            <li>Term Of Use</li>
            <li>FAQs</li>
            <li>Tracking Order</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
