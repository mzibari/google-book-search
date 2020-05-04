import React, { Component } from 'react';

import Header from './header/Header';
import SearchTerm from './searchTerm/searchTerm';
import Results from './results/results';

const url = 'https://www.googleapis.com/books/v1/volumes?';

class App extends Component {
  apiResponse;

  constructUrl() {
    const fetchUrl = `${url}${Object.keys(this.state).map((item) => {
      return (`${item}=${this.state[item].replace(' ', '+')}&`);
    })}`;
    return fetchUrl;
  }

  updateTerm(value) {
    console.log(value);
    this.setState({
      q: value
    });
  }
  updateFilter(value) {
    console.log(value);
    this.setState({
      filter: value
    });
  }
  updatePrint(value) {
    console.log(value);
    this.setState({
      printType: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch(this.constructUrl())
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.apiResponse = data;
        console.log(this.apiResponse.items[0].volumeInfo.title.toString());
      })
      .catch(err => {
        console.log(err)
      });
  }

  constructor(props) {
    super(props);
    this.state = {
      q: '',
      filter: 'partial',
      printType: "all",
      key: "AIzaSyBtSdrLQyt16tq06lUWS9dMjp2Cu2SNloo"
    };
  }


  render() {
    console.log(this.constructUrl())
    return (
      <div className='App'>
        <Header />
        <SearchTerm
          handleTerm={term => this.updateTerm(term)}
          handleFilter={filter => this.updateFilter(filter)}
          handlePrint={print => this.updatePrint(print)}
          handleSubmit={e => this.handleSubmit(e)}
        />
        <Results response={this.apiResponse} />
      </div>
    );
  }
}

export default App;