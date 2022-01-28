import Home from "./pages/Home/Home";
import Login from "./pages/Home/login/Login";
import Register from "./pages/Home/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={user ? <Home /> : <Login />} />
          <Route
            exact
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
