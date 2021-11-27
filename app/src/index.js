import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
/*import App from "./App";*/
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./login";
import { /*Link,*/ Switch, BrowserRouter, /*Router,*/ Route } from "react-router-dom";
import SignUp from "./signup";
import Home from "./home.js"
import shoe from "./shoes.js"
import cart from "./cart.js"

const rootElement = document.getElementById("root");
ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/login.js" component={Login} />
			<Route path="/signup.js" component={SignUp} />
			<Route path="/shoes.js" component={shoe} />
			<Route path="/cart.js" component={cart} />
		</Switch>
	</BrowserRouter>,
	rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// ReactDOM.render(
//   <Router>
//     <Switch>
//       <App />
//       <Route exact path="/" component={App} />
//       <Route exact path="/login.js" component={Login} />
//       <Route exact path="/about.js" component={SignUp} />
//     </Switch>
//   </Router>,
//   document.getElementById("root")
// );
