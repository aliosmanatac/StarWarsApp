import React from "react";
import axios from "axios";

export default class DefaultPage extends React.Component{
	componentDidMount(){
		const { store } = this.context;
		const { page } = this.props.location.query;
		this.fetchData({page});
		this.unsubscribe = store.subscribe(()=>{
			this.forceUpdate();
		})
	}
	componentWillUnmount(){
		this.unsubscribe();
	}
	componentWillReceiveProps(nextProps){
		const currPage = this.props.location.query.page;
		const nextPage = nextProps.location.query.page;
		if(currPage !== nextPage){
			this.fetchData({page:nextPage});
		}
	}
	fetchData({page}){
		const { store } = this.context;
		if(typeof(page) === "undefined"){
			page=1;
		}
		store.dispatch({
			type: "FETCH_DATA",
			payload: axios.get(this.baseUrl + "?page="+page)
		})
	}
}
DefaultPage.contextTypes = {
	store: React.PropTypes.object
}
