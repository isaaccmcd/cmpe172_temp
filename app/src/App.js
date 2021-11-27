import React from "react";
import "./App.css";
import { Link, /*Switch,*/ BrowserRouter, Route } from "react-router-dom";
import Login from "./login.js";
import SignUp from "./signup";
import Home from "./home.js"
import shoe from "./shoes.js"
//import cart from "./cart.js"

//const rootElement = document.getElementById("root");
function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/login.js" component={Login} />
        <Route path="/signup.js" component={SignUp} />
        <Route path="/home.js" component={Home} />
		<Route path="/shoes.js" component={shoe} />
        
        <Link to="/login.js">
          <div name="button">
            <button>Go to Login</button>
          </div>
        </Link>
        <Link to="/signup.js">
          <div name="button">
            <button>Sign Up</button>
          </div>
        </Link>

        <Link to="/home.js">
          <div name="button">
            <button>Home</button>
          </div>
        </Link>

        <Link to="/shoes.js">
          <div name="button">
            <button>Shoe Catalog</button>
          </div>
        </Link>

      </div>
    </BrowserRouter>
  );
}

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Link to="/login.js">
//         <button>Go to Login</button>
//       </Link>
//     </BrowserRouter>
//   );
// };

const LoginPage = () => {
  return (
    <div>
      <h1>LoginPage </h1>
      <Link to="/login.js">Go to Loginpage</Link>
    </div>
  );
};

const SignUpPage = () => {
  return (
    <div>
      <h1>Sign Up Page</h1>
      <Link to="/">Go to SignUpPage</Link>
    </div>
  );
};
export { LoginPage, SignUpPage }; //new
export default App;
