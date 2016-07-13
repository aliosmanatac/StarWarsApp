import React from "react";
import axios from "axios";
import PlanetDetails from "./PlanetDetails";
import DataTable from "../components/DataTable";
import DefaultPage from "./DefaultPage";
import { Constants } from "../components/Constants";
export default class Planet extends DefaultPage{
	constructor(){
		super();
		this.baseUrl = Constants.API_URLS.PLANETS_URL;
	}
	render(){ 
		const { store } = this.context;
		const { values } = store.getState().reducer;
		const { page } = this.props.location.query;
		const titles = ["Name", "diameter", "population", "gravity", "climate"];
		const fieldNames = ["name", "diameter", "population", "gravity", "climate"];
		const getObjId = (obj) => {return PlanetDetails.getPlanetId({planet:obj})};
		return (
			<DataTable 
				pageType={"planets"} 
				values={values} 
				page={page}
				titles={titles}
				fieldNames={fieldNames}
				getObjId = {getObjId}
				history={this.props.history}
			/>
		)
	}
}