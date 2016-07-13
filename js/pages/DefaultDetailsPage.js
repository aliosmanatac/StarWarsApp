import React from "react";
import axios from "axios";

export default class DefaultDetailsPage extends React.Component{
	fetchData({baseUrl, objId}) {
		const { store } = this.context;
		if(typeof(objId) === "undefined"){
			return;
		}
		store.dispatch({
			type: "FETCH_DATA",
			payload: axios.get(baseUrl+objId+"/")
		})
	}
	componentDidMount(){
		const { store } = this.context;
		const { objId }= this.props.params;
		this.fetchData({baseUrl:this.baseUrl, objId});
		this.unsubscribe = store.subscribe(()=>{
			this.forceUpdate();
		})
	}
	componentWillUnmount(){
		this.unsubscribe();
	}
}
DefaultDetailsPage.contextTypes = {
	store: React.PropTypes.object
}
