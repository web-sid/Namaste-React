import { LOGO_URL } from "./utils/constants";
import { CART_LOGO_URL } from "./utils/constants";

const Header = () => {
  return (
    <div className="head">
      <div className="logo-cont">
        <img className="logo" src={LOGO_URL}></img>
        <h1>YumHub</h1>
      </div>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <img alt="cart-logo" src={CART_LOGO_URL}></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
