import { CirclesWithBar } from "react-loader-spinner";
import { shoeloader } from "../assets/images";
import Tsparticles from "./Tsparticles";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <Tsparticles />
      <img src={shoeloader} alt="Loading..." className=" w-[40%]" />
      {/* <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      /> */}
    </div>
  );
};

export default Loader;
