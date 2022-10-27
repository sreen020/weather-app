import React from 'react';
import '../styles/gradient.css';

const CurrentWeather = ({ data }) => {
	return (
		<section className="shadow w-full p-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 background-gradient rounded-lg">
			<article className="text-center">
				<h2 className="text-6xl">{data.current.temp_c}&#176;</h2>
				<p className="text-xl">{data.current.condition.text}</p>
				<p className="text-xl">
					Feels like:
					<span className="pl-1 font-bold">
						{Math.ceil(data.current.feelslike_c)}&#176;
					</span>
				</p>
			</article>

			<article className="text-center">
				<h2 className="uppercase text-3xl font-bold text-primary-black">
					{data.location.name}
				</h2>
				<p className="font-bold text-xl pb-6 text-primary-gray">
					{data.location.country}
				</p>

				<h2 className="uppercase text-2xl font-bold text-primary-black">
					TODAY
				</h2>
				<p className="font-bold text-xl text-primary-gray">
					{data.location.localtime.substring(0, 10)}
				</p>
			</article>

			<article className="text-center">
				<p className="">
					Humidity:
					<span className="pl-1 font-bold">{data.current.humidity}%</span>
				</p>
				<p className="pb-3">
					Wind:
					<span className="pl-1 font-bold">{data.current.wind_kph}km/h</span>
				</p>

				<p className="">
					Chance of rain:
					<span className="pl-1 font-bold">
						{data.forecast.forecastday[0].day.daily_chance_of_rain}%
					</span>
				</p>
				<p className="pb-3">
					Uv index:
					<span className="pl-1 font-bold">{data.current.uv}km/h</span>
				</p>

				<p className="">
					Max temp:
					<span className="pl-1 font-bold">
						{data.forecast.forecastday[0].day.maxtemp_c}
					</span>
				</p>
				<p className="">
					Min temp:
					<span className="pl-1 font-bold">
						{data.forecast.forecastday[0].day.mintemp_c}
					</span>
				</p>
			</article>
		</section>
	);
};

export default CurrentWeather;
