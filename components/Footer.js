const Footer = () => {
  return (
    <footer>
      <div className="section-content">
        <div className="row">
          <div className="col-4">
            <a href="#" className="logo">
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: "900",
                  letterSpacing: "2px",
                }}
              >
                Rohit Bikes
              </h1>
            </a>
            <p className="footer-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, consequuntur obcaecati. Debitis sed velit, aliquid
              nihil, omnis illo dignissimos, quod vitae repellat quo nam quas
              similique cum molestias et fugiat.
            </p>
            <ul className="socials">
              <li>
                <a href="#">
                  <i className="bx bxl-facebook-circle"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxl-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxl-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <ul className="footer-menu">
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">service</a>
              </li>
              <li>
                <a href="#">product</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <ul className="footer-menu">
              <li>
                <a href="#">gallery</a>
              </li>
              <li>
                <a href="#">gears</a>
              </li>
              <li>
                <a href="#">faq</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h3 className="footer-header">news letter</h3>
            <p className="footer-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              quibusdam enim quaerat natus sit beatae. Corrupti error explicabo
              commodi beatae non. Aut ipsam nemo quibusdam quia molestias, non
              maiores reprehenderit.
            </p>
            <div className="subscribe-form">
              <input type="text" name="" placeholder="Your Email..." />
              <button className="btn">subscribe now</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
