import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class User extends Component {
	constructor (props) {
		super(props);
		this.state = {
			userData: undefined
		};
	}
	async componentDidMount () {
		let userData = await axios.get(this.props.user.url).then((res) => res.data);
		this.setState({ userData: userData });
	}
	getUserData () {
		console.log(this.state.userData);
		let {
			name,
			avatar_url,
			public_repos,
			location,
			followers,
			following,
			type,
			html_url
		} = this.state.userData;
		return (
			<div className="col-10 col-sm-6 col-md-5 col-lg-4 m-auto">
				<div
					className="card mb-3 pt-2"
					style={{
						boxShadow: "1px 1px 2px 0px #3a3a3a",
						MozBoxShadow: "1px 1px 2px 0px #3a3a3a",
						WebkitBoxShadow: "1px 1px 2px 0px #3a3a3a"
					}}>
					<img
						className="card-img-top rounded-circle m-auto"
						src={avatar_url}
						alt={name}
						style={{ maxWidth: "200px", maxHeight: "200px" }}
					/>
					<div className="card-body text-center">
						<h3 className="card-title">{name}</h3>
						<h5 className="card-subtitle text-muted">({type})</h5>
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<strong>Location: </strong>
							{location}
						</li>
						<li className="list-group-item">
							<strong>Public Repos: </strong>
							{public_repos}
						</li>
						<li className="list-group-item">
							<strong>Followers: </strong>
							{followers}
						</li>
						<li className="list-group-item">
							<strong>Following: </strong>
							{following}
						</li>
					</ul>
					<div className="card-body">
						<Link to="/" className="btn btn-light">
							Go Back
						</Link>
						<a href={html_url} className="btn btn-dark ml-3">
							Visit Github
						</a>
					</div>
				</div>
			</div>
		);
	}
	render () {
		let userData = (
			<div className="col-10 mx-auto text-center">
				<p>Loading data...</p>
			</div>
		);
		if (this.state.userData !== undefined) userData = this.getUserData();
		return (
			<div className="container mt-3">
				<div className="row">{userData}</div>
			</div>
		);
	}
}

export default User;
