import SlideItem from "./SlideItem";

const Hero = () => {
  const bikeData = [
    {
      name: "polygon siskiu",
      image: "/images/MTBROMO_N7_2022.png",
    },
    {
      name: "mt bromo n7",
      image: "/images/6489548.png",
    },
    {
      name: "cascade mount",
      image: "/images/b1.png",
    },
  ];

  return (
    <div className="hero">
      <div className="slide-container" id="hero-slide">
        {bikeData.map(({ name, image }, index) => (
          <SlideItem name={name} image={image} key={index} />
        ))}

        <div className="hero-txt">you ride</div>

        <ul className="slide-control">
          <li className="slide-prev">
            <i className="bx bx-chevron-left"></i>
          </li>
          <li className="slide-control-item active">01</li>
          <li className="slide-control-item">02</li>
          <li className="slide-control-item">03</li>
          <li className="slide-next">
            <i className="bx bx-chevron-right"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
