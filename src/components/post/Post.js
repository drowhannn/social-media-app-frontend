import "./Post.css";
import { MoreVert, FavoriteBorder } from "@mui/icons-material";
import { useState, useEffect } from "react";
import axios from "././../../axios";
import { format } from "timeago.js";

const Post = ({ post }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`users/${post.userId}`);
      return response.data;
    };
    fetchUser().then((data) => setUser(data));
  }, [post]);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={
                user.profilePicture ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScdGAFZS8P9rXmHkXMDp_vgYHzKMsrO5xSww&usqp=CAU"
              }
            />
            <span className="postUsername">
              {user?.username || "Anonymous"}
            </span>
            <span className="postDate">{format(post.updatedAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          {post.img && <img src={`${post.img}`}></img>}
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <FavoriteBorder className="postLikeButton" />
            <span className="postLikeCounter">{post.likes.length}</span>
          </div>
          <div className="postButtomRight">
            <span className="postCommentText">
              {Math.floor(Math.random() * 100)} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
