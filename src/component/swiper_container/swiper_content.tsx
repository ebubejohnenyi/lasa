import cssClasses from "./swipe.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import * as motion from "motion/react-client";

const SwiperContent: React.FC<{
  title: string;
  content1: string;
  description: string;
  descriptionStrong: string;
  buttonTitle: string;
  imagePath: string;
}> = (props) => {
  return (
    <section className={cssClasses.swipeContent}>
      <motion.div
        initial={{ opacity: 0, scale: 0, x: -50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          duration: 2,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
        }}
        style={{ backgroundColor: "transparent" }}
      >
        <div className={cssClasses.contentWrapper}>
          <h1>{props.title}</h1>
          <h2 className={cssClasses.h2}>{props.content1}</h2>
          <p>
            {props.description} - <strong>{props.descriptionStrong}</strong>
          </p>
          <button>
            {props.buttonTitle}
            <IoIosArrowRoundForward className={cssClasses.arrow} />
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 250 }}
        animate={{ x: 0 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        className={cssClasses.productImage}
      >
        <motion.img
          src={props.imagePath}
          alt="Moving Image"
          style={{ backgroundColor: "transparent" }}
          animate={{ x: [0, 20] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1.5, // starts after slide-in
          }}
        />
      </motion.div>
    </section>
  );
};
export default SwiperContent;
