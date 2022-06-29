import  "./Logo.css";
import logo from "../../../assets/logo.jpg";
const Logo = () => {
  return (
    <div className="Logo">
      <div>
      <img
        alt="Logo of the Shop project"
        src={logo}
      />
      </div>
      <div className="Text">
        <h1>Shop</h1>
      </div>
    </div>
  );
};

export default Logo;