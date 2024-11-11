import assets from "../../assets/assets";
import { logout } from "../../config/firebase";
import "./RightSidebar.css";
const RightSidebar = () => {
  return (
    <div className="rightside">
      <div className="rightside-profile">
        <img src={assets.profile_img} alt="" />
        <h3>
          Richard Sanford <img src={assets.green_dot} alt="" className="dot" />
        </h3>
        <p>Hey, THere I am Richard Sanford using chat app</p>
      </div>
      <hr />
      <div className="rightside-media">
        <p>Media</p>
        <div>
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic4} alt="" />
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
        </div>
      </div>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};
export default RightSidebar;
