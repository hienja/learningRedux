import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(<App />, document.getElementById('app'));
// const App = () =>
// 	<div className="app">
// 		<div className="landing">
// 			<h1>svideo</h1>
// 			<input type="text" placeholder="Search" />
// 			<a>or Browse All</a>
// 		</div>
// 	</div>;

// const ce = React.createElement;

// const MyTitle = function(props) {
// 	return (
// 		<div>
// 			<h1 style={{ color: props.color }}>
// 				{props.title}
// 			</h1>
// 		</div>
// 	);
// };

// ce('div', null, ce('h1', { style: { color: props.color } }, props.title));

// const MyFirstComponent = function() {
// 	return (
// 		<div>
// 			<MyTitle title="Game of Thrones" color="YellowGreen" />
// 			<MyTitle title="Stranger Things" color="YellowGreen" />
// 			<MyTitle title="Rick and Morty" color="peru" />
// 			<MyTitle title="Silicon Valley" color="LimeGreen" />
// 		</div>
// 	);
// };
// ce(
// 	'div',
// 	{ id: 'my-first-component' },
// 	ce(MyTitle, { title: 'Game of Thrones', color: 'YellowGreen' }),
// 	ce(MyTitle, { title: 'Stranger Things', color: 'GreenYellow' }),
// 	ce(MyTitle, { title: 'Rick and Morty', color: 'LimeGreen' }),
// 	ce(MyTitle, { title: 'Silicon Valley', color: 'peru' })
// );

// render(<MyFirstComponent />, document.getElementById('app'));
