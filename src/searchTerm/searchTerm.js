import React, { Component } from 'react';
import './searchTerm.css';
import Filters from '../filters/filters';

class searchTerm extends Component {

    

    render() {
        return (
            <form className="search__form" onSubmit={e => this.props.handleSubmit(e)}>
                <label htmlFor="term">
                    Search:
                </label>
                <input type="text"
                    className="term__input"
                    id="term__input"
                    placeholder="term"
                    onChange={e => this.props.handleTerm(e.target.value)} />
                <button type="submit" className="submit__button">
                    Search
                </button>
                <Filters
                    handlePrint={print => this.props.handlePrint(print)}
                    handleFilter={filter => this.props.handleFilter(filter)}
                />
            </ form>
        );
    }
}

export default searchTerm;