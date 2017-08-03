/*
mapStateToProps takes the state and only replace what need.
connect takes in a function and returns a function. 
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';
import { setSearchTerm } from '.actionCreators';

class Landing extends Component {
	props: { searchTerm: string, handleSearchTermChange: function, history: RouterHistory };
	goToSearch = (event: SyntheticEvent) => {
		event.preventDefault();
		this.props.history.push('/search');
	};
	render() {
		return (
			<div className="landing">
				<h1>svideo</h1>
				<form onSubmit={this.goToSearch}>
					<input
						onChange={props.handleSearchTermChange}
						value={props.searchTerm}
						type="text"
						placeholder="Search"
					/>
				</form>
				<Link to="/search">or Browse All</Link>
			</div>
		);
	}
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: function) => ({
	handleSearchTermChange(event) {
		dispatch(setSearchTerm(event.target.value));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
