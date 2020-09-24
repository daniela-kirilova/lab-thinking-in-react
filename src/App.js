import React, { Component } from 'react';

import './App.css';
import  {data } from './data.json';
import DataList from './components/DataList';
import SearchField from './components/SearchField';

class App extends Component {
  state = {
    data: data,
    query: '',
    inStock: false,
  };

  setQuery = (queryInput) => {
    this.setState({
      query: queryInput,
    });
  };
  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
       <div className='search'>
        <SearchField
          setQuery={this.setQuery}
          query={this.state.query}
        />
        </div>
        <div className='data'> 
         <DataList data={this.state.data} query={this.state.query} />
         </div>
      </div>
    );
  }
}

export default App;
