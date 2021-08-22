import PopularItem from "./PopularItem";

const PopularSection = () => {
  const popularBikesData = [
    {
      name: "xtrada hardtail",
      image: "/images/6489548.png",
    },
    {
      name: "Polygon Cascade",
      image: "/images/Polygon Cascade.png",
    },
    {
      name: "norco youth bicycle",
      image: "/images/b2.png",
    },
    {
      name: "mt bromo n7",
      image: "/images/MTBROMO_N7_2022.png",
    },
    {
      name: "haibike xduro rx",
      image: "/images/b1.png",
    },
    {
      name: "polygon siskiu",
      image: "/images/531352.png",
    },
  ];

  return (
    <div className="section">
      <div className="section-title">
        <h3 className="second-title to-right show-on-scroll">
          customer choice
        </h3>
        <h3 className="main-title to-left show-on-scroll">popular bikes</h3>
        <div className="btn-wrapper">
          <div className="to-top show-on-scroll">
            <a href="#" className="btn">
              view all bikes
            </a>
          </div>
        </div>
      </div>
      <div className="section-content">
        <div className="row">
          {popularBikesData.map(({ name, image }, index) => (
            <PopularItem name={name} image={image} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularSection;
