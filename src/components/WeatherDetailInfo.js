import React from 'react';

const WeatherDetailInfo = ({ data, location }) => {
	return (
		<section className="shadow w-full p-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 background-gradient rounded-lg">
			<article className="text-center">
				<h2 className="text-6xl">{Math.ceil(data.day.avgtemp_c)}&#176;</h2>
				<p className="text-xl">{data.day.condition.text}</p>
			</article>

			<article className="text-center">
				<h2 className="uppercase text-3xl font-bold text-primary-black">
					{location.name}
				</h2>
				<p className="font-bold text-xl pb-6 text-primary-gray">
					{location.country}
				</p>

				<h2 className="uppercase text-2xl font-bold text-primary-black">DAY</h2>
				<p className="font-bold text-xl text-primary-gray">
					{location.localtime.substring(0, 10)}
				</p>
			</article>

			<article className="text-center">
				<p className="">
					Avg Humidity:
					<span className="pl-1 font-bold">{data.day.avghumidity}%</span>
				</p>
				<p className="pb-3">
					Max Wind:
					<span className="pl-1 font-bold">{data.day.maxwind_kph}km/h</span>
				</p>

				<p className="">
					Chance of rain:
					<span className="pl-1 font-bold">
						{data.day.daily_chance_of_rain}%
					</span>
				</p>
				<p className="pb-3">
					Uv index:
					<span className="pl-1 font-bold">{data.day.uv}km/h</span>
				</p>

				<p className="">
					Max temp:
					<span className="pl-1 font-bold">{data.day.maxtemp_c}</span>
				</p>
				<p className="">
					Min temp:
					<span className="pl-1 font-bold">{data.day.mintemp_c}</span>
				</p>
			</article>
		</section>
	);
};

export default WeatherDetailInfo;
