import React, { Component } from "react";
import { Link } from "react-router-dom";

class UsersList extends Component {
	render () {
		console.log(this.props.user);
		let userList =
			this.props.users === undefined ? (
				<div className="col-10 mx-auto text-center">
					<p>Loading data...</p>
				</div>
			) : (
				this.props.users.map((user) => (
					<div
						key={user.id}
						className="col-8 col-sm-5 col-md-4 py-3 text-center">
						<Link className="names" to={`/github-api/${user.login}`}>
							<img
								className="img img-thumbnail rounded-circle"
								src={user.avatar_url}
								alt={user.name}
								style={{ height: "200px", width: "200px" }}
							/>
							<h3>{user.login}</h3>
						</Link>
					</div>
				))
			);
		return (
			<div className="UsersList">
				<div className="container mt-3">
					<div className="row">{userList}</div>
				</div>
			</div>
		);
	}
}

export default UsersList;
