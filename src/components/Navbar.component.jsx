const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-only-container">
        <div className="logo-img-container">
          <img src="./icons/logo-white.svg" alt="logo" />
        </div>
        <h1>trust me</h1>
      </div>
      <div className="logo-right-container">
        <ul>
          <li>
            <a href="">home</a>
            <div className="for-home-underline"></div>
          </li>
          <li>
            <a className="anchor-text" href="">
              holiday
            </a>
            <div className="for-underline"></div>
          </li>
          <li>
            <a className="anchor-text" href="">
              destinations
            </a>
            <div className="for-underline"></div>
          </li>
          <li>
            <a className="anchor-text" href="">
              flights
            </a>
            <div className="for-underline"></div>
          </li>
          <li>
            <a className="anchor-text" href="">
              offers
            </a>
            <div className="for-underline"></div>
          </li>
          <li>
            <a className="anchor-text" href="">
              contacts
            </a>
            <div className="for-underline"></div>
          </li>
          <li>
            <img src="./icons/searchbar-white.svg" alt="" />
          </li>
          <li>
            <img src="./icons/user-white.svg" alt="" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
