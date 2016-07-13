import React from "react";
import DefaultDetailsPage from "./DefaultDetailsPage";
import Subheader from "material-ui/Subheader"
import DataList from "../components/DataList"
import { List, ListItem } from "material-ui/List"
import { Constants } from "../components/Constants";

export default class PersonDetails extends DefaultDetailsPage{
	constructor(){
		super();
		this.baseUrl = Constants.API_URLS.PEOPLE_URL;
	}
	render(){ 				
		const obj = this.context.store.getState().reducer.values;
		const fields = ["gender","birth_year", "eye_color", "hair_color", "skin_color", "height", "mass"];
		return(
			<DataList headerField={"name"} fields={fields} obj={obj} />
		)
	}
}

PersonDetails.getPersonId = ({person}) => {
	const path = person.url.split("/");
	return parseInt(path[path.indexOf("people")+1]);
}