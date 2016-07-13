import React from "react";
import { Link } from "react-router";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from "material-ui/FlatButton";

export default class DataTable extends React.Component{
	onCellClick(row, column, obj){
		this.props.history.push(obj.currentTarget.parentNode.getAttribute("data-href"))
	}
	fixHeader(header){
		return header.replace(/_/g," ");
	}
	render(){
		const { pageType, values, page, titles, fieldNames, getObjId } = this.props;
		var htmlElems;
		if( Object.prototype.toString.call( values.results ) === '[object Array]' ) {
			htmlElems = values.results.map((obj,i) =>
			<TableRow key={i} data-href={pageType+"/"+getObjId(obj)+"/"} style={{cursor:"pointer"}}>{
				fieldNames.map((fieldName,j) =>
					<TableRowColumn key={i+"-"+j}> {obj[fieldName]} </TableRowColumn>
				)
			}
			</TableRow>
		)}
		var nextPage, prevPage;
		if(values.next){
			nextPage = <Link to={pageType+"?page="+(parseInt(page)+1)}><FlatButton label="Next Page"/></Link>
		}
		if(values.previous){
			prevPage = <Link to={pageType+"?page="+(parseInt(page)-1)}><FlatButton label="Prev Page"/></Link>
		}
		return(
			<div>
				<h2 style={{textTransform: "capitalize"}}>{pageType}</h2>
				<Table selectable={true}  onCellClick={(row,column,obj)=>this.onCellClick(row,column,obj)}>
					<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
						<TableRow >
							{
								fieldNames.map((fieldName,i) =>
									<TableHeaderColumn key={i} style={{textTransform:"capitalize"}}> {this.fixHeader(fieldName)} </TableHeaderColumn>
								)
							}
						</TableRow>
					</TableHeader>
					<TableBody 
						displayRowCheckbox={false} 
						showRowHover={true}>
						{htmlElems}
					</TableBody>
				</Table>
				<div style={{textAlign:'right'}}>
					{prevPage}
					{nextPage}
				</div>
			</div>
		)
	}
}