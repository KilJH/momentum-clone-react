import React, { useState, useEffect } from 'react';
import Background from './components/Background';
import Clock from './components/Clock';
import Weather from './components/Weather';
import Greeting from './components/Greeting';
import ToDoComponent from './components/ToDo/ToDoComponent';
import { Container, Grid, makeStyles } from '@material-ui/core';
import WiseRemark from './components/WiseRemark';
import { USER_LS, IS24 } from './components/Key';
import FirstGreeting from './components/FirstGreeting';
import Settings from './components/Settings';

const useStyles = makeStyles((theme) => ({
	root: {
		color: 'white',
	},
}));

function App() {
	const [name, setName] = useState(localStorage.getItem(USER_LS));
	const [is24, setIs24] = useState(
		localStorage.getItem(IS24) === 'true' ? true : false
	);

	const classes = useStyles();

	useEffect(() => {
		localStorage.setItem(USER_LS, name);
	}, [name]);

	useEffect(() => {
		localStorage.setItem(IS24, is24);
	}, [is24]);

	if (!name || name === 'null') {
		return (
			<Container maxWidth="lg">
				<Background />
				<FirstGreeting name={name} setName={setName} />
			</Container>
		);
	}

	console.log('App.js Rendering...');
	return (
		<Container maxWidth="lg" className={classes.root}>
			<Background />
			<Weather />
			<Settings is24={is24} setIs24={setIs24} name={name} setName={setName} />
			<Grid container spacing={2} justify="center" alignItems="stretch">
				<Grid item xs={12}>
					<Clock is24={is24} />
				</Grid>
				<Grid container item xs={12} lg={6} direction="row" justify="center">
					<Grid item xs={12}>
						<Greeting name={name} />
					</Grid>
					<Grid item xs={8}>
						<WiseRemark />
					</Grid>
				</Grid>
				<Grid
					container
					item
					xs={12}
					lg={6}
					direction="column"
					justify="flex-start"
				>
					<Grid xs={12}>
						<ToDoComponent />
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
}

export default App;
