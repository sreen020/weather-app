import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import WeatherByHour from '../components/WeatherByHour';
import WeatherDetailInfo from '../components/WeatherDetailInfo';
import BackButton from '../components/BackButton';
import LoadingState from '../components/LoadingState';

const DetailPage = () => {
	const { city, day } = useParams();
	const [weatherData, setWeatherData] = useState(null);

	// fetch data onload or as the route param changes
	useEffect(() => {
		fetchWeatherData(city);
	}, [city, day]);

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

	return (
		<>
			{weatherData && <BackButton customRoute={weatherData.location.name} />}

			<section className="w-full grid grid-cols-1 lg:grid-cols-3 mt-2 gap-8 px-8">
				<article className="lg:col-span-2">
					{weatherData ? (
						<WeatherDetailInfo
							data={weatherData.forecast.forecastday[day]}
							location={weatherData.location}
						/>
					) : (
						<LoadingState />
					)}
				</article>
				<article className="border-l pl-8 h-80vh overflow-auto">
					<p className="text-xl font-bold">Weather each hour</p>

					{weatherData ? (
						weatherData.forecast.forecastday[day].hour.map((item) => (
							<WeatherByHour key={item.time_epoch} data={item} />
						))
					) : (
						<LoadingState />
					)}
				</article>
			</section>
		</>
	);
};

export default DetailPage;
