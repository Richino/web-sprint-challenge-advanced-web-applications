import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BubblePage from "./components/BubblePage";
import Login from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import axios from "axios";
import "./styles.scss";

const logout = () => {
	localStorage.removeItem("token");
	window.location.href = "/";
};

function App() {
	return (
		<Router>
			<div className="App">
				<header>
					Color Picker Sprint Challenge
					<a data-testid="logoutButton" href="#" onClick={logout}>
						logout
					</a>
				</header>

				<Route exact path="/" component={Login} />
				<PrivateRoute exact path="/home" component={BubblePage} />
			</div>
		</Router>
	);
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.
