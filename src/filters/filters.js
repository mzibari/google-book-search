import React, { Component } from 'react';
import './filters.css';


class Filters extends Component {
    render() {
        return (
            <div className="filters__form">
                <span className="print">Print Type:</span>
                <select id="print__type" className="print__type"
                    onChange={e => this.props.handlePrint(e.target.value)}>
                    <option value="all">
                        All</option>
                    <option value="books">
                        Books</option>
                    <option value="magazines">
                        Magazines</option>
                </select>

                <span className="book">Book Type:</span>
                <select id="book__type" className="book__type"
                    onChange={e => this.props.handleFilter(e.target.value)}>
                    <option value="all">
                        All</option>
                    <option value="free">
                        Free</option>
                    <option value="not__free">
                        Not Free</option>
                </select>
            </div>
        );
    }
}

export default Filters;