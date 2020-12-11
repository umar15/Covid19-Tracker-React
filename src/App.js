import React, { Component } from "react";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Navbar from "./components/Navbar";
import "./index.css";
import { fetchData } from "./components/API";
import coronaImage from "./images/image.png";

class App extends Component {
	state = {
		data: {},
		country: "",
	};

	async componentDidMount() {
		const fetchedData = await fetchData();
		this.setState({
			data: fetchedData,
		});
	}

	handleCountryChange = async (country) => {
		const fetchedData = await fetchData(country);
		this.setState({
			data: fetchedData,
			country: country,
		});
	};

	render() {
		const { data, country } = this.state;
		return (
			<>
				<Navbar />
				<div className="container">
					<img className="image" src={coronaImage} alt="COVID-19" />
					<Cards data={data} />
					<CountryPicker handleCountryChange={this.handleCountryChange} />
					<Chart data={data} country={country} />
				</div>
			</>
		);
	}
}

export default App;
