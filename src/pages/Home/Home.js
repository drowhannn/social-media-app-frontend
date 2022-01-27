import Feed from "../../components/feed/Feed";
import Topbar from "../../components/navbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
