import cssClasses from "./contact_form.module.css";

const ContactForm: React.FC = () => {
  return (
    <div className={cssClasses.wrapper}>
      <h1>Send Us a Message</h1>
      <p>Ask any anything here</p>
      <form>
        <input placeholder="Your Name*" required />
        <input placeholder="Your email*" required />
        <input placeholder="Phone Number" required />
        <input placeholder="Subject *" required />
        <textarea placeholder="Message" required />
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
