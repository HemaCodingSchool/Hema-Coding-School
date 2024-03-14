import "./App.css";
import Home from "./Home";
import Login from "./Forms/Login";
import Registration from "./Forms/Registration";
import AccountDetails from "./Forms/AccountDetails";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li>
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li>
              <Link className="nav-link" to="/register">Register</Link>
            </li>
            <li>
              <Link className="nav-link" to="/account-details">Account Details</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/account-details" element={<AccountDetails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
