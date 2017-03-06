import React, { Component } from 'react';
import {
	InstantSearch, 
	Hits, 
	SearchBox, 
	Highlight, 
	RefinementList,
	Pagination, 
	CurrentRefinements, 
	ClearAll
} from 'react-instantsearch/dom';

import Product from '../components/Product';
import '../styles/AlgoliaSearch.css';

class AlgoliaSearch extends Component {

	constructor() {
		super();
		this.appId = 'latency';
		this.apiKey = '3d9875e51fbd20c7754e65422f7ce5e1';
		this.indexName = 'bestbuy';
	}

	render() {
		return (
			<InstantSearch
				appId={this.appId}
				apiKey={this.apiKey}
				indexName={this.indexName}
			>
				<div className="container">
				  <div className="top">
				      <SearchBox />
				  </div>
				  <div className="middle">
				      <div className="filters">
					      <CurrentRefinements />
					      <ClearAll />
				      	<RefinementList attributeName="category" />
				      </div>
				      <div className="hits">
				      	<Hits hitComponent={Product} />
				      </div>
				  </div>
				  <div className="bottom">
			      	<Pagination />
				  </div>
			    </div>
			</InstantSearch>
		);
	}

}

export default AlgoliaSearch;

