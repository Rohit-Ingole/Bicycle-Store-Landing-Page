const PopularItem = ({ name, image }) => {
  return (
    <div className="col-3">
      <div className="to-top show-on-scroll">
        <div className="product-card">
          <a href="#">
            <div className="product-card-img">
              <img src={image} alt="" />
            </div>
            <h3 className="product-name">{name}</h3>
            <span className="product-price">$3,900.00</span>
          </a>
          <button className="btn">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default PopularItem;
