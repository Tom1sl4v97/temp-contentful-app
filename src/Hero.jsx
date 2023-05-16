import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contenful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odio
            rerum sequi atque magni magnam porro ipsum tenetur? Porro sint ea
            rem fugiat. Error accusantium explicabo eos deserunt, iusto velit!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
