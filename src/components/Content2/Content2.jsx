import "./Content2.css";
import right_icon from "../../images/right-icon.svg";
import img9 from "../../images/img9.jpg";
import img10 from "../../images/img10.jpg";
import img11 from "../../images/img11.jpg";

const Content2 = () => {
  return (
    <div className="content2">
      <div className="content2-header">
        <h4>Kia-three-Category-Item</h4>
        <img src={right_icon} alt="image" />
      </div>
      <div className="content2-container">
        <div className="box">
          <h3>ব্যবসা</h3>
          <img src={img9} alt="" />
          <div className="box-wrapper">
            <div className="square"></div>
            <h3>ব্যাবসায়ের মূল মন্ত্র</h3>
          </div>
          <hr />
          <div className="box-wrapper">
            <div className="square"></div>
            <h3>ব্যবসা কিভাবে শুরু করবো</h3>
          </div>
        </div>
        <div className="box">
          <h3>শিক্ষা</h3>
          <img src={img10} alt="image" />
          <div className="box-wrapper">
            <div className="square"></div>
            <h3>শিক্ষা বার্তা</h3>
          </div>
          <hr />
          <div className="box-wrapper">
            <div className="square"></div>
            <h3>শিক্ষা নিয়ে যত কথা</h3>
          </div>
        </div>
        <div className="box">
          <h3>স্বাস্থ্য</h3>
          <img src={img11} alt="image" />
          <div className="box-wrapper">
            <div className="square"></div>
            <h3>স্বাস্থ্যই সকল সুখের মূল</h3>
          </div>
          <hr />
          <div className="box-wrapper">
            <div className="square"></div>
            <h3>কিভাবে দেহকে সুস্থ রাখা যায়</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
