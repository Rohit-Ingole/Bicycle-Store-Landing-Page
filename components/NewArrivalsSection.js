import NewArrivalItem from "./NewArrivalItem";

const NewArrivalsSection = () => {
  const newArrivalBikes = [
    {
      name: "norco youth bicycle",
      image: "/images/b2.png",
    },
    {
      name: "  mt bromo n7",
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
        <h3 className="second-title to-right show-on-scroll">new bikes</h3>
        <h3 className="main-title to-left show-on-scroll">new arrivals</h3>
        <div className="btn-wrapper">
          <div className="to-top show-on-scroll">
            <a href="#" className="btn ">
              view all bikes
            </a>
          </div>
        </div>
      </div>

      <div className="section-content">
        <div className="row">
          <div className="col-5 col-center">
            <div className="to-right show-on-scroll">
              <div className="product-card product-card-large">
                <a href="#">
                  <div className="product-card-img">
                    <img src="/images/Polygon Cascade.png" alt="" />
                  </div>
                  <h3 className="product-name">polygon cascade</h3>
                  <span className="product-price">$3,900.00</span>
                </a>
                <button className="btn">add to cart</button>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="row">
              {newArrivalBikes.map(({ image, name }, index) => (
                <NewArrivalItem key={index} image={image} name={name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalsSection;
