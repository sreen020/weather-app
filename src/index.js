import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './routes/App';
import DetailPage from './routes/DetailPage';

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/:city" element={<App />} />
			<Route path="/:city/:day" element={<DetailPage />} />
			<Route path="*" element={<h1>GEEN PAGINA GEVONDEN</h1>} />
		</Routes>
	</BrowserRouter>,

	document.getElementById('root')
);
