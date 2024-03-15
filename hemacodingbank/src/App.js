import "./App.css";
import Home from "./Home";
import Login from "./Forms/Login";
import Registration from "./Forms/Registration";
import AccountDetails from "./Forms/AccountDetails";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {useState} from "react"
function App() {
  const [customer, setCustomer] = useState();
    const updateCustomer = (userData)=>{
      setCustomer(userData)
      console.log(userData)
    }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
           { !customer ? (
           <>
           <li>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
            </>)
            :(
            <>
            <li>
              <Link className="nav-link" to="/account-details">
                Account Details
              </Link>
            </li>
            <li><Link className="nav-link">Deposit</Link></li>
            <li><Link className="nav-link">Withdraw</Link></li>
            <li>
              <button>Logout</button>
            </li>


            </>)
           }
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login updateCustomer={updateCustomer}/>} />
          <Route path="/register" element={<Registration />} />
          <Route path="/account-details" element={<AccountDetails customer={customer} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
