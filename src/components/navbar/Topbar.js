import "./Topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

const Nav = () => {
  return (
    <div className="topbar">
      <div className="topbarLeft">
        <span className="logo">SociallY</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friends, posts or video..."
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <div className="topbarIconBadge">1</div>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <div className="topbarIconBadge">2</div>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <div className="topbarIconBadge">1</div>
          </div>
        </div>
        <img
          src="https://lh3.googleusercontent.com/a-/AOh14Gh6wZgecVZ-0fZHx04uGXOuiC_sCQKtliWMKe2U=s360-p-rw-no"
          className="topbarImg"
          alt="Profile Picture"
        />
      </div>
    </div>
  );
};

export default Nav;
