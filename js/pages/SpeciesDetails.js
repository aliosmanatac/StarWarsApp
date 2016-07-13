import React from "react";
import DefaultDetailsPage from "./DefaultDetailsPage";
import Subheader from "material-ui/Subheader"
import DataList from "../components/DataList"
import { List, ListItem } from "material-ui/List"
import { Constants } from "../components/Constants";

export default class SpeciesDetails extends DefaultDetailsPage{
	constructor(){
		super();
		this.baseUrl = Constants.API_URLS.SPECIES_URL;
	}
	render(){ 				
		const obj = this.context.store.getState().reducer.values;
		const fields = ["classification","average_height", 
		"average_lifespan", "designation", "eye_colors", "hair_colors", 
		"skin_colors","language"];
		return(
			<DataList headerField={"name"} fields={fields} obj={obj} />
		)
	}
}

SpeciesDetails.getSpeciesId = ({species}) => {
	console.log("species:",species)
	const path = species.url.split("/");
	return parseInt(path[path.indexOf("species")+1]);
}