import React, {Component} from 'react';
import {connect} from 'react-redux';
import ShowCard from './ShowCard';
import Header from '.Header';

class Search extends Component {
	state = {
		searchTerm: ''
	};
	props: {
		show: Array<Show>
	};
	handleSearchTermChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement}) => {
		this.setState({searchTerm: event.target.value});
	}
};

render() {
	return (
		<div className='search'>
		<Header searchTerm={this.state.searchTerm} showSearch handleSearchTermChange={this.handleSearchTermChange} />
		</div>
		);
}