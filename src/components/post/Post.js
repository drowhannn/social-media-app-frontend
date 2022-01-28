import "./Post.css";
import { MoreVert, Favorite } from "@mui/icons-material";
import { useState, useEffect, useContext } from "react";
import axios from "././../../axios";
import { format } from "timeago.js";
import { AuthContext } from "../../context/AuthContext";

const Post = ({ post }) => {
  const { user } = useContext(AuthContext);
  const [postUser, setPostUser] = useState([]);
  const [likes, setLikes] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`users/${post.userId}`);
      return response.data;
    };
    fetchUser().then((data) => setPostUser(data));

    setLikes(post.likes.length);
    setIsLiked(post.likes.includes(user._id));
  }, [post]);
  const handleLikeClick = async () => {
    await axios.put(`posts/${post._id}/like`, { userId: user._id });
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={
                postUser.profilePicture ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScdGAFZS8P9rXmHkXMDp_vgYHzKMsrO5xSww&usqp=CAU"
              }
            />
            <span className="postUsername">
              {postUser?.username || "Anonymous"}
            </span>
            <span className="postDate">{format(post.updatedAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          {post.img && (
            <img
              src={`http://localhost:9000/images/${post.img}`}
              className="postImg"
            ></img>
          )}
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <Favorite
              className={`postLikeButton +${isLiked ? " liked" : " "}`}
              onClick={handleLikeClick}
            />
            <span className="postLikeCounter">{likes}</span>
          </div>
          <div className="postButtomRight">
            <span className="postCommentText">No comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
