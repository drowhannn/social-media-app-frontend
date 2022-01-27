import "./Post.css";
import { MoreVert, FavoriteBorder } from "@mui/icons-material";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="https://st.depositphotos.com/2101611/4338/v/600/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg"
              alt="Post Profile Image"
            />
            <span className="postUsername">Rohan Dhimal</span>
            <span className="postDate">5 mins ago...</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            adipisci sit quam velit reprehenderit excepturi quaerat quis
            voluptas amet tempore quos error, vel distinctio soluta aut iste
            impedit. Error, officia.
          </span>
          <img
            src="https://www.holidify.com/images/bgImages/KATHMANDU.jpg"
            alt="Post Image"
            className="postImg"
          />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <FavoriteBorder className="postLikeButton" />
            <span className="postLikeCounter">5 people liked it</span>
          </div>
          <div className="postButtomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
