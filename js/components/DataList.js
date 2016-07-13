import React from "react";
import Subheader from "material-ui/Subheader"
import { List, ListItem } from "material-ui/List"

export default class DataList extends React.Component{
	
	render(){ 						
		const {obj, headerField, fields } = this.props;
		return(
			<List>
				<Subheader style={{color: 'black', fontSize:"28px"}}>{obj[headerField]}</Subheader>
				{
					fields.map(field => 
						<ListItem primaryText={<p style={{margin: '0px'}}><b>{field}:</b> {obj[field]}</p>} />
					)
				}
			</List>
		)
	}
}
