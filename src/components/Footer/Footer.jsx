import "./Footer.css";
import logo from "../../images/prekkhapotLogo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="credit">
        <div className="credit-left">
          <img className="logo" src={logo} alt="prekkhapot-logo" />
        </div>
        <div className="credit-center">
          <h2>About Us:</h2>
          <h3>প্রেক্ষাপট</h3>
          <h3>প্রগতি ইনস্যুরেন্স ভবন</h3>
          <h3>২০-২১ কারওয়ান বাজার, ঢাকা ১২১৫</h3>
          <h3>ফোন: 00123456789। ফ্যাক্স: 00210000।</h3>
          <h3>ই-মেইল: prekkhapot@gmail.com</h3>
        </div>
        <div className="credit-right">
          <h2>সম্পাদকীয়:</h2>
          <h3>আলতাব মাহমুদ রবিন</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
