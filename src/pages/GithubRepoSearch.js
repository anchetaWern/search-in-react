import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';

import jsonp from 'jsonp';

const styles = {
  item: {
    padding: '2px 6px',
    cursor: 'default'
  },
  highlightedItem: {
    color: 'white',
    background: 'hsl(200, 50%, 50%)',
    padding: '2px 6px',
    cursor: 'default'
  },
  menu: {
    border: 'solid 1px #ccc'
  }
};

class GithubRepoSearch extends Component {

  constructor() {
    super();
    this.state = {
      repos: []
    };

    this.getItemValue = this.getItemValue.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onChange = this.onChange.bind(this);
    this.renderItem = this.renderItem.bind(this);
    
  }

  render() {
    return (
      <div id="github-repo-search">
        <Autocomplete
          inputProps={{name: "repo", id: "repo-autocomplete"}}
          ref="autocomplete"
          value={this.state.value}
          items={this.state.repos}
          getItemValue={this.getItemValue}
          onSelect={this.onSelect}
          onChange={this.onChange}
          renderItem={this.renderItem}
        />        
      </div>
    );
  }

  getItemValue(item) {
    return item.url.replace('https://api.github.com/repos/', '');
  }

  onSelect(value, item) {
    this.setState({ value, repos: [ item ] });     
  }

  onChange(event, value) {

    let s = this;
    s.setState({ value, loading: true });

    jsonp('https://api.github.com/search/repositories?q=' + value, null, function (err, response) {
      if (err) {
        console.error(err.message);
      } else {
        let data = [];
        if(response.data.items){
          data = response.data.items;
        }

        s.setState({ repos: data, loading: false });
      }
    });
         
  }

  renderItem(item, isHighlighted) {
    
    return (
      <div
        style={isHighlighted ? styles.highlightedItem : styles.item}
        key={item.id}
        id={item.id}
      >{item.url.replace('https://api.github.com/repos/', '')}</div>
    );
  
  }

}

export default GithubRepoSearch;
