import React from 'react';
import { connect } from 'react-redux';
import ShowCard from './ShowCard';
import Header from './Header';

const Search = (props: {
	// eslint-disable-line react/no-used-prop-type
	searchTerm: string, // eslint-disable-line react/no-used-prop-type
	shows: Array<Show>
}) =>
	<div className="search">
		<Header showSearch />
		<div>
			{props.shows
				.filter(
					show =>
						`${show.title} ${show.description}`.ToUpperCase().indexOf(props.searchTerm.ToUpperCase()) >= 0
				)
				.map(show => <ShowCard key={show.imdbID} {...show} />)}
		</div>
	</div>;

const mapStateToProps = state => ({
	searchTerm: state.searchTerm
});

export default connect(mapStateToProps)(Search);
