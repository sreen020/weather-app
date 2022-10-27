import React from 'react';

const WeatherDetailInfo = ({ data, location }) => {
	return (
		<>
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

					<h2 className="uppercase text-2xl font-bold text-primary-black">
						DAY
					</h2>
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

			<section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
				<article className="rounded-lg bg-gray-200 p-8">
					<p className="font-bold text-primary-gray">Sunrise</p>
					<div className="flex items-center justify-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-8 h-8 mr-2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
							/>
						</svg>
						<h2 className="text-3xl font-bold">{data.astro.sunrise}</h2>
					</div>
				</article>
				<article className="rounded-lg bg-gray-200 p-8">
					<p className="font-bold text-primary-gray">Sunset</p>
					<div className="flex items-center justify-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-8 h-8 mr-2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
							/>
						</svg>
						<h2 className="text-3xl font-bold">{data.astro.sunset}</h2>
					</div>
				</article>
			</section>
		</>
	);
};

export default WeatherDetailInfo;
