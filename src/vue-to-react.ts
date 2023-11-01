import React from 'react';
import * as Vue from 'vue';

const defaultPassProps = <T = any>(props: T): T => props;

export default <TProps = any>(Component: any, { passProps = defaultPassProps } = {}) => {
	return (props: TProps) => {
		const el = React.useRef(null);

		React.useEffect(() => {
			if (Vue.createApp) {
				const app = Vue.createApp({
					render: () => Vue.h(Component, (passProps && passProps(props)) || {}),
				});

				// @ts-expect-error
				app.mount(el.current);

				// @ts-expect-error
				return () => app.unmount();
			}
		});

		return React.createElement('div', null, React.createElement('div', { ref: el }));
	};
};
