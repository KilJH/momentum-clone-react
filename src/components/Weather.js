import React, { useState } from 'react';
import { API_KEY, COORDS } from './Key';
import { makeStyles } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import WbCloudyIcon from '@material-ui/icons/WbCloudy';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'fixed',
		top: '16px',
		right: '16px',
		'& > *': {
			float: 'right',
			fontSize: '0.75em',
		},
		'& > svg': {
			fontSize: '1.5em',
			marginRight: '0.25em',
		},
	},
	temp: {
		fontSize: '1.5em',
	},
}));

function askForCoords() {
	navigator.geolocation.getCurrentPosition(
		(position) => {
			const latitude = position.coords.latitude;
			const longitude = position.coords.longitude;
			const coordsObj = {
				latitude,
				longitude,
			};
			localStorage.setItem(COORDS, JSON.stringify(coordsObj));
			// getWeather(latitude, longitude);
		},
		() => {
			console.log("can't access geo location");
		}
	);
}

function getWeatherIcon(desc) {
	switch (desc) {
		case '맑음':
			return <WbSunnyIcon />;
		case '흐림':
			return <WbCloudyIcon />;
		case '튼구름':
			return <WbCloudyIcon />;
		case '가벼운 눈':
			return <AcUnitIcon />;
		default:
			return <span>{desc}</span>;
	}
}

const Weather = () => {
	const classes = useStyles();

	// const [temperature, setTemperature] = useState('');
	// const [city, setCity] = useState('');
	// const [description, setDescription] = useState('');

	const [weather, setWeather] = useState({
		temperature: '',
		city: '',
		description: '',
	});

	function getWeather(lat, lon) {
		console.log('getWeather 호출');
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
		)
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				// setTemperature(Math.round(json.main.temp));
				// setCity(json.name);
				// setDescription(json.weather[0].description);
				setWeather({
					temperature: Math.round(json.main.temp),
					city: json.name,
					description: json.weather[0].description,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	const loadedCoords = localStorage.getItem(COORDS);

	if (loadedCoords === null) {
		askForCoords();
	} else {
		// getWeather
		const parseCoords = JSON.parse(loadedCoords);
		if (!weather.temperature) {
			// 중복호출 방지... 분당 60회 가능
			getWeather(parseCoords.latitude, parseCoords.longitude);
		}
	}

	console.log('Weather.js Rendering...');
	if (weather.temperature) {
		return (
			<div className={classes.root}>
				<span className={classes.temp}>{`${weather.temperature}°C`}</span>
				{getWeatherIcon(weather.description)}
				<br />
				<span>
					<RoomIcon fontSize="small"></RoomIcon>
					{weather.city}
				</span>
			</div>
		);
	} else {
		return <div></div>;
	}
};

export default Weather;
