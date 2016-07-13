import React from "react";
import axios from "axios";
import StarshipDetails from "./StarshipDetails";
import DataTable from "../components/DataTable";
import DefaultPage from "./DefaultPage";
import { Constants } from "../components/Constants";
export default class Starship extends DefaultPage{
	constructor(){
		super();
		this.baseUrl = Constants.API_URLS.STARSHIPS_URL;
	}
	render(){ 
		const { store } = this.context;
		const { values } = store.getState().reducer;
		const { page } = this.props.location.query;
		const titles = ["Name", "manufacturer","model",
						"max_atmosphering_speed","model","cargo_capacity"];
		const fieldNames = ["name", "manufacturer","model",
						"max_atmosphering_speed","model","cargo_capacity"];
		const getObjId = (obj) => {return StarshipDetails.getStarshipId({starship:obj})};
		return (
			<DataTable 
				pageType={Constants.DATA_TYPES.STARSHIPS} 
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