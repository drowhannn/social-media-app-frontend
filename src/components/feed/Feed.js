import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.css";
import { useState, useEffect } from "react";
import axios from "././../../axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "posts/timeline/61f0333ceb0be666aede752f"
      );
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
