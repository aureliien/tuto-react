import "../styles/Banner.css";
import toto from "../assets/leaf.png";

function Banner() {
  return (
    <div className="banner">
      <img src={toto} alt="leaf" className="leaf-image" />
      <h1>La maison jungle</h1>
    </div>
  );
}

export default Banner;
