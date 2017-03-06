import React, { Component } from 'react';

import GithubRepoSearch from './pages/GithubRepoSearch';
import MovieSearch from './pages/MovieSearch';
import AlgoliaSearch from './pages/AlgoliaSearch';

class App extends Component {
  render() {
    return (
      <div>
        <GithubRepoSearch />
      </div>
    );
  }
}

export default App;
