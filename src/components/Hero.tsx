import bg from "../assets/bg.jpeg";
const Hero = () => {
  return (
    <div className="mt-3">
      <div className="flex flex-row text-white items-center justify-between">
        <div>
          <h2>Hello</h2>
          <h2>Am Comfotha Mwansasule</h2>
          <p>Frontend programmer and user interface desgner (UI)</p>
        </div>
        <div>
          <img src={bg} alt="image" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
