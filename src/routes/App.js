import React, { useState, useEffect } from 'react';
import WeatherFound from '../components/WeatherFound';
import '../styles/styles.css';
import { useParams } from 'react-router-dom';

const App = () => {
	const { city } = useParams();
	const [weatherData, setWeatherData] = useState(null);

	// Fetch data from API and store in state var
	const fetchWeatherData = async (city) => {
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '85d43d1b47msh7273a9c7d1d5c94p1b0a1cjsnbc483a52d1e3',
				'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
			},
		};

		fetch(
			`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=5`,
			options
		)
			.then((response) => response.json())
			.then((response) => setWeatherData(response))
			.catch((err) => console.error(err));
	};

	// When user submitted form this function clears input and runs fetch
	const handleForm = (e) => {
		e.preventDefault();

		fetchWeatherData(e.target.city.value);
		e.target.city.value = '';
	};

	// When the user uses the backbutton the data needs to be fetched again
	useEffect(() => {
		city && fetchWeatherData(city);
	}, [city]);

	return (
		<main className="h-screen p-6">
			<section className="flex flex-col items-center h-full">
				<img
					className="mr-auto pb-5"
					src="./img/logo-incentro.svg"
					alt="Logo Incentro"
				/>

				<form className="w-full" onSubmit={handleForm}>
					<fieldset className="flex">
						<div className="focus-within:text-gray-400 relative text-gray-600 w-full">
							<span className="absolute flex h-full items-center pl-2">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
									className="w-6 h-6"
								>
									<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
								</svg>
							</span>
							<input
								type="text"
								name="city"
								id="city"
								className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-l py-3 px-4 leading-tight focus:outline-none focus:bg-white pl-10"
								placeholder="Zoek een stad..."
							/>
						</div>
						<button
							className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-r"
							type="submit"
						>
							ZOEK!
						</button>
					</fieldset>
				</form>

				{weatherData ? (
					<WeatherFound data={weatherData} />
				) : (
					<article className="h-full flex flex-col justify-center">
						<h2 className="text-primary-black text-3xl lg:text-5xl uppercase font-bold text-center">
							<span className="text-primary-orange text-4xl lg:text-6xl">
								Weer
							</span>
							eldwijd
						</h2>
						<p className="text-primary-black text-center max-w-md">
							Zoek hierboven naar een stad om het actuele weer en de
							weersvoorspelling te bekijken
						</p>
					</article>
				)}
			</section>
		</main>
	);
};

export default App;
