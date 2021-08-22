const SlideItem = ({ name, image }) => {
  return (
    <div className="slide">
      <div className="slide-txt">
        <div className="slide-title">
          <h3>{name}</h3>
        </div>
        <div className="slide-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laboru
          </p>
        </div>
        <div className="slide-btn">
          <a href="#" className="hero-btn">
            buy now
          </a>
        </div>
      </div>
      <div className="slide-img">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default SlideItem;
