import "./Share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

const Shared = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg"
            alt=""
            className="shareProfileImg"
          />
          <input placeholder="What's in your mind?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia className="shareIcon photo" />
              <span className="shareOptionText">Photo Or Video</span>
            </div>
            <div className="shareOption">
              <Label className="shareIcon tag" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room className="shareIcon locations" />
              <span className="shareOptionText">Locations</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions className="shareIcon feelings" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Shared;
