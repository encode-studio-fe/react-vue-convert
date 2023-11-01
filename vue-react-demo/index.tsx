import React from 'react';
import { render } from 'react-dom';
import { h } from 'vue';

import { vue2React } from '../src';

const App = vue2React({
	data() {
		return {
			count: 0,
		};
	},

	render() {
		return h('button', this.count);
	},
});

render(<App />, document.getElementById('app'));
