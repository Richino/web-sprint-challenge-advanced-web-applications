import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../helpers/axiosWithAuth";

const Login = () => {
	// make a post request to retrieve a token from the api
	// when you have handled the token, navigate to the BubblePage route
	let history = useHistory();
	const [credentials, setCredentials] = useState({
		username: "",
		password: "",
	});
	const [errorMessage, setErrorMessage] = useState();

	//replace with error state
	const handleChange = e => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	const submit = e => {
		e.preventDefault();
		if (credentials.username === "" || credentials.password === "") {
			setErrorMessage("Username or Password is not valid");
		} else {
			axiosWithAuth()
				.post("/login", credentials)
				.then(res => {
					localStorage.setItem("token", res.data.payload);
					history.push("/home");
				})
				.catch(() =>
					setErrorMessage("Username or Password is not valid")
				);
		}
	};

	return (
		<div>
			<h1>Welcome to the Bubble App!</h1>

			<div data-testid="loginForm" className="login-form">
				<h2>Build login form here</h2>
				<form onSubmit={submit}>
					<label>
						Username
						<input
							name="username"
							data-testid="username"
							onChange={handleChange}
						/>
					</label>
					<label>
						Password
						<input
							name="password"
							data-testid="password"
							type="password"
							onChange={handleChange}
						/>
					</label>
					<button type="submit" onClick={submit}>
						Submit
					</button>
				</form>
			</div>

			<p data-testid="errorMessage" className="error">
				{errorMessage}
			</p>
		</div>
	);
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda / i<3Lambd4, save that token to localStorage.
