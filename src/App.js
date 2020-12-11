import React, { Component } from "react";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Navbar from "./components/Navbar";
import "./index.css";
import { fetchData } from "./components/API";

class App extends Component {
	state = {
		data: {},
	};

	async componentDidMount() {
		const fetchedData = await fetchData();
		this.setState({
			data: fetchedData,
		});
	}
	render() {
		const { data } = this.state;
		return (
			<>
				<Navbar />
				<div className="container">
					<Cards data={data} />
					<CountryPicker />
					<Chart />
				</div>
			</>
		);
	}
}

export default App;
