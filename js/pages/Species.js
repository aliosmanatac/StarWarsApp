import React from "react";
import SpeciesDetails from "./SpeciesDetails";
import DataTable from "../components/DataTable";
import DefaultPage from "./DefaultPage";
import { Constants } from "../components/Constants";
export default class Species extends DefaultPage{
	constructor(){
		super();
		this.baseUrl = Constants.API_URLS.SPECIES_URL;
	}
	render(){ 
		const { store } = this.context;
		const { values } = store.getState().reducer;
		const { page } = this.props.location.query;
		const titles = ["name","classification","average_height", "average_lifespan", "designation", "language"];
		const fieldNames = ["name","classification","average_height", "average_lifespan", "designation", "language"];
		const getObjId = (obj) => {return SpeciesDetails.getSpeciesId({species:obj})};
		return (
			<DataTable 
				pageType={Constants.DATA_TYPES.SPECIES} 
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
