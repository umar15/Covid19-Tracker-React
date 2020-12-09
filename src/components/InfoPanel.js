import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 1000,
		margin: "0 auto",
		marginTop: 50,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
	title: {
		color: "blue",
		textTransform: "uppercase",
	},
}));

export default function InfoPanel() {
	const [globalData, setGlobalData] = useState({});
	useEffect(() => {
		async function getData() {
			try {
				const response = await fetch("https://covid19.mathdro.id/api");
				let data = await response.json();
				// console.log(response);
				const modifiedData = {
					confirmed: data.confirmed.value,
					recovered: data.recovered.value,
					deaths: data.deaths.value,
					// lastUpdate: data.lastUpdate,
				};
				setGlobalData(modifiedData);
			} catch (error) {
				console.log(error);
			}
		}
		getData();
	}, []);

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				{Object.keys(globalData).map((key, index) => {
					return (
						<Grid item xs={12} sm={4} key={index}>
							<Paper className={classes.paper} elevation={5}>
								<h3 className={classes.title}>{key}</h3>
								<h2>{globalData[key]}</h2>
							</Paper>
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
}
