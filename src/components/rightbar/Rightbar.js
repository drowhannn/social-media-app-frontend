import "./Rightbar.css";
import { Redeem } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import axios from "../../axios";
import { AuthContext } from "../../context/AuthContext";

const Rightbar = () => {
  const { user } = useContext(AuthContext);
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const getFriends = async () => {
      const response = await axios.get("/users/" + user._id + "/friends");
      setFriends(response.data);
    };
    getFriends();
  }, [user]);
  console.log(friends);
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <Redeem className="birthdayIcon" />
          <span className="birthdayText">
            <b>No one</b> have birthday today.
          </span>
        </div>
        <img
          src="https://previews.123rf.com/images/dizanna/dizanna1511/dizanna151100567/47606903-advertisement-word-cloud-business-concept.jpg"
          className="rightbarAd"
          alt="Ad Image"
        />
        <h4 className="rightbarTitle">Followings</h4>
        <ul className="rightbarFriendList">
          {friends.map((friend) => (
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img
                  src={
                    friend.profilePicture ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScdGAFZS8P9rXmHkXMDp_vgYHzKMsrO5xSww&usqp=CAU"
                  }
                  alt="Friend Profile Image"
                  className="rightbarProfileImg"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarFriendName">{friend.username}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
