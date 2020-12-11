import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import "./CountryPicker.css";
import { fetchCountries } from "../API";

const CountryPicker = ({ handleCountryChange }) => {
	const [fetchedCountries, setFetchCountries] = useState([]);

	useEffect(() => {
		const fetchAPI = async () => {
			setFetchCountries(await fetchCountries());
		};
		fetchAPI();
	}, [fetchedCountries]);

	return (
		<FormControl className="form-control">
			<NativeSelect
				defaultValue=""
				onChange={(e) => handleCountryChange(e.target.value)}
			>
				<option value="">Global</option>
				{fetchedCountries.map((country, index) => (
					<option key={index} value={country}>
						{country}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	);
};

export default CountryPicker;
