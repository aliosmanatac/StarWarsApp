import React from "react";
import axios from "axios";
import VehicleDetails from "./VehicleDetails";
import DataTable from "../components/DataTable";
import DefaultPage from "./DefaultPage";
import { Constants } from "../components/Constants";
export default class Vehicle extends DefaultPage{
	constructor(){
		super();
		this.baseUrl = Constants.API_URLS.VEHICLES_URL;
	}
	render(){ 
		const { store } = this.context;
		const { values } = store.getState().reducer;
		const { page } = this.props.location.query;
		const titles = ["Name", "model", "manufacturer", "lenght", "crew"];
		const fieldNames = ["name", "model", "manufacturer", "lenght", "crew"]; 
		const getObjId = (obj) => {return VehicleDetails.getVehicleId({vehicle:obj})};
		return (
			<DataTable 
				pageType={"vehicles"} 
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