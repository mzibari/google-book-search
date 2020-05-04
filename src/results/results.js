import React, { Component } from 'react';
import './results.css';


class Results extends Component {
    getBooksInfo() {
        let booksInfo;
        if (!this.props.response) {
            for (let i = 0; i < 6; i++) {
                return (
                    <div>
                        <h2 className="book__title">{this.props.response.items[i].volumeInfo.title.toString()}</h2>
                        <section className="book__section">
                            <img className="book__cover" alt="book cover" src={this.props.response.items[i].volumeInfo.imageLinks.smallThumbnail.toString()} />
                            <div className="book__info">
                                <span className="author">{this.props.response.items[i].volumeInfo.authors[0].toString()}</span>
                                <p className="description">{this.props.response.items[i].volumeInfo.description.toString()}</p>
                            </div>
                        </section>
                    </div>
                );
            }

            /* booksInfo = this.props.response.items.map((book) => {
                return (
                    <div>
                        <h2 className="book__title">{book.volumeInfo.title.toString()}</h2>
                        <section className="book__section">
                            <img className="book__cover" alt="book cover" src={book.volumeInfo.imageLinks.smallThumbnail.toString()} />
                            <div className="book__info">
                                <span className="author">{book.volumeInfo.authors[0].toString()}</span>
                                <p className="description">{book.volumeInfo.description.toString()}</p>
                            </div>
                        </section>
                    </div>
                );
            }); */
        }
        return booksInfo;
    }

    render() {
        return (
            <div className="main__div">
                {this.getBooksInfo()}
            </div>
        );
    }
}

export default Results;
