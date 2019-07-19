import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import UsersList from "./UsersList";
import User from "./User";

class Router extends Component {
	render () {
		const getUser = (props) => {
			if (this.props.data !== undefined) {
				let userName = props.match.params.username;
				let foundUser = this.props.data.find(
					(user) => user.login.toLowerCase() === userName.toLowerCase()
				);
				return <User {...props} user={foundUser} />;
			}
		};
		return (
			<Switch>
				<Route
					exact
					path="/"
					render={() => <UsersList users={this.props.data} />}
				/>
				<Route exact path="/:username" render={getUser} />
				<Redirect to="/" />
			</Switch>
		);
	}
}

export default Router;
