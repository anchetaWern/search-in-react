import React from 'react';
import { Highlight } from 'react-instantsearch/dom';

export default function Product({ hit }) {
		
	return (
      <div className="hit">
      	<div className="hit-img-container">
      		<img src={hit.thumbnailImage} className="hit-img" />
      	</div>
      	<div className="hit-details">
      		<a href={hit.url} target="_blank">
	        	<Highlight attributeName="name" hit={hit} />
	        </a>
	        <div className="hit-price">${hit.salePrice}</div>
      	</div>
      </div>
	   
	);

}

