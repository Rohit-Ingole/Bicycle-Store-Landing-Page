const Header = () => {
  return (
    <header>
      <a href="#" className="logo">
        <h1
          style={{ fontSize: "3rem", fontWeight: "900", letterSpacing: "2px" }}
        >
          Rohit Bikes
        </h1>
      </a>
      <div className="main-menu-wrapper">
        <ul className="main-menu">
          <li>
            <a href="#" className="active">
              home
            </a>
          </li>
          <li>
            <a href="#">shop</a>
          </li>
          <li>
            <a href="#">dealer</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
      </div>
      <ul className="user-menu">
        <li>
          <a href="#">
            <i className="bx bx-shopping-bag"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-user"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-search"></i>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
