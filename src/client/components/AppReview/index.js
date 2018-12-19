import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Applicant from './Applicant';

import { setRating } from '../../actions';

class AppReview extends React.Component {
	constructor(props) {
		super(props);
	} 

	render () {
		
		//const { applications } = this.props;
		const { applicants } = this.props;
		return(
			
			<table>
				<tr>
					<th>Name</th>
					<th>School</th>
					<th>Major</th>
					<th>Grad Year</th>
					<th>Level of Study</th>
					<th>Github</th>
					<th>Linkedin</th>
					<th>Resume</th>
				</tr>
				<tbody>
					
					{applicants.map(application => {
						<Applicant application = {application} />
					})}
					
				</tbody>
			</table>
		);
	}
}


const mapStateToProps=(state) => {
	return {
		applicants: state	
	}
};

const mapDispatchToProps=(dispatch) => {
	return bindActionCreators({setRating: setRating}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AppReview);