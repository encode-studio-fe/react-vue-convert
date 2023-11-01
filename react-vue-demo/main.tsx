import { createApp, h } from 'vue';
import React from 'react';
import { react2Vue } from '../src/index';

const ReactApp: React.FC<{ initial: number }> = ({ initial }) => {
	const [count, setCount] = React.useState(initial);

	React.useEffect(() => {
		console.log('React to Vue');
	}, []);

	return (
		<div className="app">
			<button onClick={() => setCount(count + 1)}>{count}</button>
		</div>
	);
};

const App = react2Vue(ReactApp);

const app = createApp({
	setup() {
		return () => h(App, { initial: 10 });
	},
});

app.mount('#app');
