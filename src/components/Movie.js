import React from 'react';

export default function Movie ({ result }) {
  
  let source = result._source;
  let url = "http://www.imdb.com/title/" + source.imdbId
 
  return (
    <div data-qa="hit" className="movie">
      <a href={url} target="_blank">
        <img data-qa="poster" src={source.poster} className="movie-img" />
        <div data-qa="title" className="movie-title">{source.title}</div>
      </a>
    </div>
  );

}
