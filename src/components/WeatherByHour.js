import React from 'react';

const WeatherByHour = ({ data }) => {
	return (
		<article className="grid grid-cols-3 pb-2 border-b pt-2">
			<p className="flex items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6 pr-1"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>

				{data.time.substr(data.time.length - 5)}
			</p>
			<h2 className="text-3xl flex items-center">
				{Math.ceil(data.temp_c)}&#176;
			</h2>
			<img
				className="flex items-center"
				src={data.condition.icon}
				alt={data.condition.text}
			/>
		</article>
	);
};

export default WeatherByHour;
