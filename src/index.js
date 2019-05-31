import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';
import axios from "axios";
import multiClientMiddleware from "redux-axios-middleware";
import reducer from './reducer/reducer'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import App from './App'

const client = axios.create({
	baseURL: 'http://localhost:3000',
	responseType: "json",
  });
  
const store = createStore(
	reducer,
	applyMiddleware(multiClientMiddleware(client))
);

const routing = (
	<Provider store={store}>
		<App/>
	</Provider>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
