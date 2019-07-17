import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Router from "./Router";

class App extends Component {
	constructor (props) {
		super(props);
		this.state = {
			data: undefined
		};
	}
	async componentDidMount () {
		let data = await axios
			.get("https://api.github.com/users")
			.then((res) => res.data);
		this.setState({ data: data });
	}
	render () {
		return (
			<div className="App">
				<div>
					<Navbar />
					<Router data={this.state.data} />
				</div>
			</div>
		);
	}
}

export default App;
