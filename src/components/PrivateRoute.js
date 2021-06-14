//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in
import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			localStorage.getItem("token") ? (
				<Component {...props} />
			) : (
				<Redirect to="/" />
			)
		}
	/>
);
