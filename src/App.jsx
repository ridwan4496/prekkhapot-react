import "./App.css";
import Navbar1 from "./components/Navbar1/Navbar1";
import Navbar2 from "./components/Navbar2/Navbar2";
import Footer from "./components/Footer/Footer";
import Content1 from "./components/Content1/Content1";
import Content4 from "./components/Content4/Content4";
import Content2 from "./components/Content2/Content2";
import Content3 from "./components/Content3/Content3";

const App = () => {
  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      <Footer />
    </div>
  );
};

export default App;
