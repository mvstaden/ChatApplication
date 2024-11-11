import assets from "../../assets/assets";
import "./LeftSidebar.css";
const LeftSidebar = () => {
  return (
    <div className="leftsidebar">
      <div className="leftsidebar-top">
        <div className="leftsidebar-nav">
          <img src={assets.logo} className="logo" alt="" />
          <div className="menu">
            <img src={assets.menu_icon} alt="" />
            <div className="sub-menu">
              <p>Edit Profile</p>
              <hr />
              <p>Logout</p>
            </div>
          </div>
        </div>
        <div className="leftsidebar-search">
          <img src={assets.search_icon} alt="" />
          <input type="text" placeholder="Search here" />
        </div>
      </div>

      <div className="leftsidebar-list">
        {Array(12)
          .fill("")
          .map((item, index) => (
            <div className="friends" key={index}>
              <img src={assets.profile_img} alt="" />
              <div>
                <p>Richard Sanford</p>
                <span>Hello, How are you?</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default LeftSidebar;