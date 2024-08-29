import "./Content3.css";

const Content3 = () => {
  return (
    <div className="content3">
      <div className="row-1">
        <div className="row-1-left">
          <h3>ভিডিও </h3>
          <p>প্রেক্ষাপটের সভায় পুঁথিপাঠ-</p>
          <p>নকশিকাঁথা ব্যান্ড এর ভোকাল সাজেদ ফাতেমী</p>
        </div>
        <div className="row-1-right">
          <iframe
            width="800"
            height="500"
            src="https://www.youtube.com/embed/Lf73cuOcPOM?si=qJbgl3qi5Sryjl7D"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="row-2">
        <div className="row-2-box1">
          <iframe
            width="400"
            height="250"
            src="https://www.youtube.com/embed/fdTegGreT20?si=xSSE1rrTcX7NQGx-"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <h3>আবার এলো যে সন্ধ্যা। কভার: এসেইস...</h3>
        </div>
        <div className="row-2-box1">
          <iframe
            width="400"
            height="250"
            src="https://www.youtube.com/embed/xrOO89kW4ss?si=zOjNMAbu8mI8ktFj"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <h3>তাহসানের সঙ্গে প্রেক্ষাপট...</h3>
        </div>
        <div className="row-2-box1">
          <iframe
            width="400"
            height="250"
            src="https://www.youtube.com/embed/Mx43i1-77AU?si=frdQNb5enEXFOMGT"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <h3>কলসিন্দুরে সাফজয়ীদের সাথে প্রেক্ষাপটের জন্মদিন</h3>
        </div>
        <div className="row-2-box1">
          <iframe
            width="400"
            height="250"
            src="https://www.youtube.com/embed/6u7kLg0AYfY?si=AgAchva3MSl65saP"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <h3>মহারাজ: ওয়ারফেজ (কভার) - সাদাত সাফওয়ান শ্রেয়ান</h3>
        </div>
      </div>
    </div>
  );
};

export default Content3;
