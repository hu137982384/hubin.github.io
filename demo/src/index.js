import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import 'antd/dist/antd.css';
import registerServiceWorker from './registerServiceWorker';
export default class Index extends React.Component {
	render() {
		return (
			<div>
				<App/>
				
			</div>
		);
	};
}
ReactDOM.render(<Index/>, document.getElementById('root'));
registerServiceWorker();