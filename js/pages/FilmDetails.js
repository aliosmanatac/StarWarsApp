import React from "react";
import DefaultDetailsPage from "./DefaultDetailsPage";
import Subheader from "material-ui/Subheader"
import DataList from "../components/DataList"
import { List, ListItem } from "material-ui/List"
import { Constants } from "../components/Constants";

export default class FilmDetails extends DefaultDetailsPage{
	constructor(){
		super();
		this.baseUrl = Constants.API_URLS.FILMS_URL;
	}
	render(){ 				
		const obj = this.context.store.getState().reducer.values;
		const fields = ["episode_id","director", "producer", "release_date", "opening_crawl"];
		return(
			<DataList headerField={"title"} fields={fields} obj={obj} />
		)
	}
}

FilmDetails.getFilmId = ({film}) => {
	const path = film.url.split("/");
	return parseInt(path[path.indexOf("films")+1]);
}