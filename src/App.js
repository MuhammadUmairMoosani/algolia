import React, { Component } from 'react';
import './App.css';
import { 
  InstantSearch, 
  Hits,
  SearchBox,
  Highlight
 } from 'react-instantsearch-dom';

function Product({ hit }) {
  return (
    <div style={{ marginTop: '10px' }}>
      <span className="hit-name">
        <Highlight attribute="name" hit={hit} />
      </span>
    </div>
  );
}

function Search() {
  return (
    <div>
    <SearchBox />
    <Hits hitComponent={Product} />
  </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App" id="app">
 <InstantSearch
    appId="applicationID"
    apiKey="apiKey"
    indexName="contacts"
  >
    <Search />
  </InstantSearch>
      </div>
    );
  }
}

export default App;
