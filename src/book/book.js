import React, { Component } from 'react';
import './book.css';

class Book extends Component {
    bookResult = {
        
    }
    render() {
        return (
            <div>
                <h2 className="book__title"></h2>
                <section className="book__section">
                    <img className="book__cover" alt="book cover" src="" />
                    <div className="book__info">
                        <span className="author"></span>
                        <p className="description"></p>
                    </div>
                </section>
            </div>
        );
    }
}

export default Book;