import React from "react";
import FilmDetails from "./FilmDetails";
import DataTable from "../components/DataTable";
import DefaultPage from "./DefaultPage";
import { Constants } from "../components/Constants";
export default class Films extends DefaultPage{
	constructor(){
		super();
		this.baseUrl = Constants.API_URLS.FILMS_URL;
	}
	render(){ 
		const { store } = this.context;
		const { values } = store.getState().reducer;
		const { page } = this.props.location.query;
		const fieldNames = ["title", "episode_id", "release_date", "producer", "director"];
		const getObjId = (obj) => {return FilmDetails.getFilmId({film:obj})};
		return (
			<DataTable 
				pageType={Constants.DATA_TYPES.FILMS} 
				values={values} 
				page={page}
				fieldNames={fieldNames}
				getObjId = {getObjId}
				history={this.props.history}
			/>
		)
	}
}