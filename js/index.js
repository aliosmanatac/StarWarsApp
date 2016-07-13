import { applyMiddleware, createStore, combineReducers } from "redux";
import axios from "axios";
import thunk from "redux-thunk"; 
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import People from "./pages/People";
import PersonDetails from "./pages/PersonDetails";
import Species from "./pages/Species";
import SpeciesDetails from "./pages/SpeciesDetails";
import Planets from "./pages/Planets";
import PlanetDetails from "./pages/PlanetDetails";
import Films from "./pages/Films";
import FilmDetails from "./pages/FilmDetails";
import Vehicles from "./pages/Vehicles";
import VehicleDetails from "./pages/VehicleDetails";
import Starships from "./pages/Starships";
import StarshipDetails from "./pages/StarshipDetails";
import { Router, Route, IndexRoute, hashHistory} from "react-router"; 
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Provider } from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const initialState = {
	fetching: false,
	fetched: false,
	values: [],
	error: false,
}
const reducer = (state=initialState, action) => {
	switch(action.type) {
		case "FETCH_DATA_PENDING": {
			return {
				...state, 
				fetching: true,
				values: [],
			};
			break;
		}
		case "FETCH_DATA_FULFILLED": {
			return {
				...state, 
				fetching: false, 
				fetched: true,
				values: action.payload.data,
			};
			break;
		}
		case "FETCH_DATA_REJECTED": {
			return {
				...state, 
				fetching: false, 
				fetched:false,
				error:true
			};
			break;
		}
		case "CLOSE_ERROR_DIALOG": {
			return {
				...state, 
				error:false
			};
			break;
		}
		default: {
			return state;
			break;
		}
	}
}

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(
  combineReducers({
    reducer,
    routing: routerReducer
  }), middleware
);
 
const app = document.getElementById("app");

ReactDOM.render(
  <MuiThemeProvider>
		<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Layout}>
				<IndexRoute component={People}></IndexRoute>
				<Route path="people" component={People}></Route>
				<Route path="people/:objId" component={PersonDetails}></Route>
				<Route path="planets" component={Planets}></Route>
				<Route path="planets/:objId" component={PlanetDetails}></Route>
				<Route path="films" component={Films}></Route>
				<Route path="films/:objId" component={FilmDetails}></Route>
				<Route path="species" component={Species}></Route>
				<Route path="species/:objId" component={SpeciesDetails}></Route>
				<Route path="vehicles" component={Vehicles}></Route>
				<Route path="vehicles/:objId" component={VehicleDetails}></Route>
				<Route path="starships" component={Starships}></Route>
				<Route path="starships/:objId" component={StarshipDetails}></Route>
			</Route>
		</Router>
		</Provider>
  </MuiThemeProvider>
	,document.getElementById("app")
)
