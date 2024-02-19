import "./index.css";

// import { IoLocationSharp } from "react-icons/io5";
// import { IoIosMail } from "react-icons/io";

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-logo-title">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNUHHhmODkp6LXZiHf1FRJNpV3ukrlxjHgNMQTNQ46WNCTL5RV0ACYYWt_HrbfX08YLms&usqp=CAU"
        alt="website logo"
        className="footer-website-logo"
      />
      <p className="footer-title">ahead</p>
    </div>
    <div className="location-email-main-container">
      <div className="icon-text-container">
        {/*  <IoLocationSharp size={25} color="#fff" className="location" /> */}
        <p className="location-email-text">Augustrase 26, 10117 Berlin</p>
      </div>
      <div className="icon-text-container">
        {/*  <IoIosMail size={25} color="#fff" className="email" /> */}
        <p className="location-email-text">hi@ahead-app.com</p>
      </div>
    </div>
    <img
      src="https://brandeps.com/logo-download/D/Download-on-the-App-Store-logo-vector-01.svg"
      className="footer-app-store-image"
      alt="app store"
    />
    <p className="copy-right">2022 Ahead app. All rights reserved.</p>
  </footer>
);

export default Footer;
