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
      return response.data;
    };
    fetchPosts().then((data) => setPosts(data));
  }, []);

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
