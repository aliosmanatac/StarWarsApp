import React from "react";
import DefaultDetailsPage from "./DefaultDetailsPage";
import Subheader from "material-ui/Subheader"
import DataList from "../components/DataList"
import { List, ListItem } from "material-ui/List"
import { Constants } from "../components/Constants";

export default class PlanetDetails extends DefaultDetailsPage{
	constructor(){
		super();
		this.baseUrl = Constants.API_URLS.PLANETS_URL;
	}
	render(){ 				
		const obj = this.context.store.getState().reducer.values;
		const fields = ["rotation_period","orbital_period", "diameter", "climate", "gravity", "terrain", "surface_water","population"];
		return(
			<DataList headerField={"name"} fields={fields} obj={obj} />
		)
	}
}

PlanetDetails.getPlanetId = ({planet}) => {
	const path = planet.url.split("/");
	return parseInt(path[path.indexOf("planets")+1]);
}