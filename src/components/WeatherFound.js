import React from 'react';
import CurrentWeather from './CurrentWeather';
import WeatherByHour from './WeatherByHour';
import WeatherByDay from './WeatherByDay';

const WeatherFound = ({ data }) => {
	return (
		<section className="w-full grid grid-cols-1 lg:grid-cols-3 mt-8 gap-8">
			{data.forecast ? (
				<>
					<article className="lg:col-span-2">
						<CurrentWeather data={data} />
						<WeatherByDay data={data} />
					</article>
					<article className="border-l pl-8 h-80vh overflow-auto">
						<p className="text-xl font-bold">Weather each hour</p>

						{data.forecast.forecastday[0].hour.map((item) => (
							<WeatherByHour key={item.time_epoch} data={item} />
						))}
					</article>
				</>
			) : (
				<article className="h-full flex flex-col justify-center col-span-3 items-center pt-10">
					<img className="w-30" src="./img/not-found.svg" alt="Not found" />

					<p className="text-primary-black text-center max-w-md pt-6">
						Unfortunately, the city you were trying to search for could not be
						found. Try again with a different location.
					</p>
				</article>
			)}
		</section>
	);
};

export default WeatherFound;
