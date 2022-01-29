import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.css";
import { useState, useEffect, useContext } from "react";
import axios from "././../../axios";
import { AuthContext } from "../../context/AuthContext";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`posts/timeline/${user._id}`);
      setPosts(
        response.data.sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        )
      );
    };
    fetchPosts();
  }, [user]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {/* <Post /> */}
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
