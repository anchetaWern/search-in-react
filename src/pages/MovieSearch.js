import React, { Component } from 'react';

import {
  Layout, 
  TopBar, 
  LayoutBody, 
  SearchkitManager, 
  SearchkitProvider, 
  SearchBox, 
  LayoutResults, 
  Hits
} from "searchkit";

import Movie from '../components/Movie';
import '../styles/MovieSearch.css';

const searchkit = new SearchkitManager("http://demo.searchkit.co/api/movies");

class MovieSearch extends Component {

  render() {
    return (
      <SearchkitProvider searchkit={searchkit}>
        <Layout>
          <TopBar>
            <SearchBox searchOnChange={true} />
          </TopBar>
          <LayoutBody>
            <LayoutResults>
              <Hits mod="sk-hits-grid" />
            </LayoutResults>
          </LayoutBody>
        </Layout>
      </SearchkitProvider>
    );
  }

}

export default MovieSearch;