import "./Content1.css";
import hero1 from "../../images/hero1.jpg";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpg";
import img6 from "../../images/img6.jpg";
import img7 from "../../images/img7.jpg";
import img8 from "../../images/img8.jpg";

const Content1 = () => {
  return (
    <div className="container-box">
      <div className="first-row">
        <div className="first-row-box content-text">
          <h4>
            ক্রিকেট রাচিন রবীন্দ্র- যাঁর নামে জড়িয়ে আছেন শচীন রাহুল দ্রাবিড়
          </h4>
          <p>
            ভারত বিশ্বকাপের আগে কিউইদের দরকার ছিল একজন জাত স্পিনার, আর সেই খোঁজই
            তারা চালিয়ে যাচ্ছিল রবীন্দ্রর মাঝে। রবীন্দ্রও সেই......
          </p>
        </div>
        <div className="first-row-box">
          <img className="content-image" src={img1} alt="content-image" />
        </div>
        <div className="first-row-box content-text">
          <h4>
            নোবেল ২০২৩ অর্থনীতিতে নোবেল জয়ের খবর শুনে হাওয়া হাভার্ড
            বিশ্ববিদ্যালয়ের অধ্যাপক
          </h4>
          <p>
            এ বছর অর্থনীতিতে নোবেল পুরস্কার পেয়েছেন মার্কিন অর্থনীতিবিদ ক্লডিয়া
            গোল্ডিন। শ্রমবাজার এ নারীর ভূমিকা বোঝাপড়ায় আমাদের জ্ঞানবৃদ্ধিতে
            অবদান এর জন্য এ পুরস্কার পেলেন তিনি।
          </p>
        </div>
        <div className="first-row-box">
          <img className="content-image" src={img2} alt="content-image" />
        </div>
      </div>
      <div className="row2">
        <div className="content-box content-text">
          <h4>প্রেক্ষাপট এর ১০ বছর...</h4>
          <h4>প্রেক্ষাপট ও বাস্তবতার জন্মদিনে যা বলল পাঠকেরা</h4>
          <p>
            বিশ্বাস করো, সুযোগ থাকলে আমরা সব কটি চিঠিই ছাপাতাম। দুটো কথা মনে
            রাখবে- এক. আমরা তোমাদের সব চিঠি পড়ি। আর দুই. আমরা...
          </p>
        </div>
        <div className="content-box">
          <img className="content-image" src={img3} alt="content-image" />
        </div>
        <div className="content-box content-text">
          <h4>মহারাজ: ওয়ারফেজ (কভার)-</h4>
          <h4>সাদাত সাফওয়ান শ্রেয়ান</h4>
          <p>
            ছোট্ট শ্রেয়ান গান গাইতে খুব ভালোবাসে। হাসতে, খেলতে, ঘুরতে-বেড়াতে
            সবসময় সে গান গায়। শ্রেয়ানের এই হরহামেশা গান...
          </p>
        </div>
      </div>
      <div className="row3">
        <div className="content-box-container">
          <div className="inner-row1">
            <div className="content-box3 content-text">
              <h4>ক্রিকেট আমি দেশের জন্য খেলি-</h4>

              <p>আইসিসিকে বললেন সাকিব-আল হাসান</p>
              <img src={img4} alt="" />
            </div>
            <div className="content-box3 content-text">
              <h4>মাথায় কত প্রশ্ন আসে</h4>
              <p>ছোট মাছ খেলে কি চোখের জ্যোতি বাড়ে?</p>
              <img src={img5} alt="" />
            </div>
            <div className="content-box3 content-text">
              <h4>প্রেক্ষাপট এর ১০ বছর...</h4>
              <p>প্রেক্ষাপট ও বাস্তবতার জন্মদিন যা বলল পাঠকেরা</p>
              <img src={img6} alt="" />
            </div>
          </div>
          <div className="inner-row2">
            <div className="content-box3 content-text">
              <h4>শখের দুনিয়া</h4>
              <p>বিজ্ঞানী নিকোলা টেসলার অদ্ভুত শখ</p>
              <img src={img8} alt="" />
            </div>
            <div className="content-box3 content-text">
              <h4>ক্রিকেট আমি দেশের জন্য খেলি-</h4>
              <h4>আইসিসিকে বললেন সাকিব-আল হাসান</h4>
              <p>
                আমার মনে হয় আমি কখনো হারতে চাই না। কোনো পরিস্থিতিতেই নয়। আমি সব
                সময় জিততে চাই। সেটা হোক আমার বন্ধুদের সঙ্গে, গ্রাম বা...
              </p>
            </div>
          </div>
        </div>
        <div className="content-box2 content-text">
          <h4>নোবেল ২০২৩</h4>
          <p>
            অর্থনীতিতে নোবেল জয়ের খবর শুনে হাওয়া হাভার্ড বিশ্ববিদ্দালয়ের
            অধ্যাপক...
          </p>
          <img src={img7} alt="" />
        </div>
      </div>

      <div className="hero-img">
        <img className="poster-image" src={hero1} alt="hero-image" />
      </div>
    </div>
  );
};

export default Content1;
