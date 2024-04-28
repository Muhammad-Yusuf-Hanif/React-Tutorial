import { useState, ChangeEvent } from "react";
import Button from "../../common/Button";

type WeatherInfo = {
	name: string;
	main: {
		temp: number;
	};
	weather: [{ description: string }];
};

const APIDisplay = () => {
	const [weather, setWeather] = useState<WeatherInfo | null>()
	const [city, setCity] = useState("");
	const [error, setError] = useState("");

	const apiKey = "96ae4f0ff15d3b006deaf259d7638b26";
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

	function cityInput(e: ChangeEvent<HTMLInputElement>) {
		setCity(e.target.value);
		setError("");
		// setWeather(null);
	}

	function searchCity() {
		const fetchWeather = async () => {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				const data = await response.json();
				setWeather(data);
			} catch (error) {
				console.error("Fetching weather data failed:", error);

				// Check if the error is an instance of Error before calling toString()
				if (error instanceof Error) {
					console.log(typeof error.toString()); 
					setError(error.toString() + " Please enter a valid city");
				} else {
					// Handle cases where error might not be an Error object
					console.log(typeof error); // Check what type it is
					setError("An unexpected error occurred. Please enter a valid city");
				}

				setWeather(null);
			}
		};
		fetchWeather();
	}

	return (
		<>
			<input
				className=" border-4 rounded-md ml-7 mr-3 my-3"
				type="text"
				id="city"
				onChange={cityInput}
			/>
			<Button text="Search" type="submit" onClick={searchCity} />
			{weather && (
				<div className="mx-7 my-3">
					<h1>Weather in {weather.name}</h1>
					<p>Temperature: {weather.main.temp} Degrees</p>
					<p>Condition: {weather.weather[0].description}</p>
				</div>
			)}

			<h1 className="ml-7 text-red-500 font-bold">{error}</h1>
		</>
	);
};

export default APIDisplay;
