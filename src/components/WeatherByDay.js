import React from 'react';
import { useNavigate } from 'react-router-dom';

const WeatherByDay = ({ data }) => {
	let navigate = useNavigate();

	return (
		<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
			{data.forecast.forecastday.map((day, index) => (
				<article
					className="rounded-lg bg-gray-200 p-8 cursor-pointer hover:bg-gray-400 transition-all duration-200"
					key={day.date}
					onClick={() =>
						navigate(
							`../${data.location.name
								.replace(/\s+/g, '-')
								.toLowerCase()}/${index}`,
							{ replace: false }
						)
					}
				>
					<p className="font-bold text-primary-gray">{day.date}</p>
					<div className="flex items-center justify-center">
						<h2 className="text-6xl font-bold">
							{Math.ceil(day.day.avgtemp_c)}
							&#176;
						</h2>
						<img
							className="flex items-center"
							src={day.day.condition.icon}
							alt={day.day.condition.text}
						/>
					</div>
				</article>
			))}
		</section>
	);
};

export default WeatherByDay;
