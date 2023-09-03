import Lottie from "lottie-react";
import backgroundImg from "../../images/loadingbackground.jpg";
import cubeAnimation from "../../assets/cube.json";
import Typewriter from "../TypeWriter/typewriter";
import "./preloader.css";

function Preloader() {
  const pageStyles = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  };

  return (
    <div className="loading" style={pageStyles}>
      <p className="welcome ">
        {" "}
        <Typewriter text="Welcome ..." delay={50} />
      </p>
      <Lottie animationData={cubeAnimation} width="100%" height="100%" />
    </div>
  );
}

export default Preloader;
