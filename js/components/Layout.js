import React from "react";
import axios from "axios";
import { Link } from "react-router";
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from "material-ui/AppBar"
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
export default class Layout extends React.Component{
	componentDidMount(){
		this.unsubscribe = this.context.store.subscribe(()=>{
			this.forceUpdate();
		})
	}
	componentWillUnmount(){
		this.unsubscribe();
	}
	closeErrorDialog = () => {
		this.context.store.dispatch({
			type:"CLOSE_ERROR_DIALOG"
		})
	};
	render(){
    	const actions = [
			<FlatButton label="OK"
			    primary={true}
			    onClick={this.closeErrorDialog}
			  />
			];
		return(
			<div>
				<AppBar title="STAR WARS APP" />
				<div style={{margin:"16px"}}>
					<span style={{marginRight: '10px'}}>Browse:</span>
					<Link to="people?page=1" activeClassName="active"><RaisedButton label="People"/></Link>
					<Link to="planets?page=1" activeClassName="active"><RaisedButton label="Planets"/></Link>
					<Link to="films?page=1" activeClassName="active"><RaisedButton label="Films"/></Link>
					<Link to="starships?page=1" activeClassName="active"><RaisedButton label="Starships"/></Link>
					<Link to="species?page=1" activeClassName="active"><RaisedButton label="Species"/></Link>
					<Link to="vehicles?page=1" activeClassName="active"><RaisedButton label="Vehicles"/></Link>
				</div>
				<Dialog
		          title="Error on retrieving data!"
		          actions={actions}
		          modal={false}
		          open={this.context.store.getState().reducer.error}
		          onRequestClose={this.closeErrorDialog}
		        >
		          Connection to the server failed. Please check your connection.
		        </Dialog>

				{this.props.children}
			</div>
		)
	}
}
Layout.contextTypes = {
	store: React.PropTypes.object
}