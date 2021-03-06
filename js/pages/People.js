import React from "react";
import PersonDetails from "./PersonDetails";
import DataTable from "../components/DataTable";
import DefaultPage from "./DefaultPage";
import { Constants } from "../components/Constants";
export default class People extends DefaultPage{
	constructor(){
		super();
		this.baseUrl = Constants.API_URLS.PEOPLE_URL;
	}
	render(){ 
		const { store } = this.context;
		const { values } = store.getState().reducer;
		const { page } = this.props.location.query;
		const fieldNames = ["name", "gender", "birth_year", "height", "mass"];
		const getObjId = (obj) => {return PersonDetails.getPersonId({person:obj})};
		return (
			<DataTable 
				pageType={Constants.DATA_TYPES.PEOPLE} 
				values={values} 
				page={page}
				fieldNames={fieldNames}
				getObjId = {getObjId}
				history={this.props.history}
			/>
		)
	}
}