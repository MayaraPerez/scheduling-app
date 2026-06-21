import { Link } from "react-router-dom";
import "./style.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <Link className="link" to="/appointment">
          <button className="banner-button">Schedule</button>
        </Link>
        <Link className="link" to={"/reschedule"}>
          <button className="banner-button">Reschedule</button>
        </Link>
        <Link className="link" to={"/cancel"}>
          <button className="banner-button">Cancel</button>
        </Link>
        <Link className="link" to={"/remember"}>
          <button className="banner-button">Remember</button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
