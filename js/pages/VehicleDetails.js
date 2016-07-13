import React from "react";
import DefaultDetailsPage from "./DefaultDetailsPage";
import Subheader from "material-ui/Subheader"
import DataList from "../components/DataList"
import { List, ListItem } from "material-ui/List"
import { Constants } from "../components/Constants";

export default class VehicleDetails extends DefaultDetailsPage{
	constructor(){
		super();
		this.baseUrl = Constants.API_URLS.VEHICLES_URL;
	}
	render(){ 				
		const obj = this.context.store.getState().reducer.values;
		const fields = ["cargo_capacity", "consumables", "cost_in_credits", "crew", "length", "manufacturer", "max_atmosphering_speed", "model", "passengers"];
		return(
			<DataList headerField={"name"} fields={fields} obj={obj} />
		)
	}
}

VehicleDetails.getVehicleId = ({vehicle}) => {
	const path = vehicle.url.split("/");
	return parseInt(path[path.indexOf(Constants.DATA_TYPES.VEHICLES)+1]);
}