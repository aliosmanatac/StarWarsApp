import React from "react";
import DefaultDetailsPage from "./DefaultDetailsPage";
import Subheader from "material-ui/Subheader"
import DataList from "../components/DataList"
import { List, ListItem } from "material-ui/List"
import { Constants } from "../components/Constants";

export default class StarshipDetails extends DefaultDetailsPage{
	constructor(){
		super();
		this.baseUrl = "http://swapi.co/api/starships/";
	}
	render(){ 				
		const obj = this.context.store.getState().reducer.values;
		const fields = ["MGLT","cargo_capacity","consumables",
			"cost_in_credits","crew",
			"hyperdrive_rating","length","manufacturer",
			"max_atmosphering_speed","model","passengers",
			"starship_class"];
		return(
			<DataList headerField={"name"} fields={fields} obj={obj} />
		)
	}
}

StarshipDetails.getStarshipId = ({starship}) => {
	const path = starship.url.split("/");
	return parseInt(path[path.indexOf(Constants.DATA_TYPES.SPECIES)+1]);
}