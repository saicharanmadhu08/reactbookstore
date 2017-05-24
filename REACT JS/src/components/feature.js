import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import BookDetail from './books/book_list';

class Feature extends Component {

    componentWillMount() {
        this.props.fetchMessage();
    }

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    onClick={() => this.props.selectBook(book)}
                    key={book.ISBN}
                    className="list-group-item">
                    {book.Title}
                </li>
            );
        });
    }

    render() {
        return (
            <div id="feature">
                <div>
                    <div className=" col-sm-3">
                        List of Books in store:
                        <br/><br/>
                    <ul className="list-group" id="bookList">
                            {this.renderList()}
                        </ul>
                    </div>
                </div>
                <div className=" col-sm-9">
                    <BookDetail></BookDetail>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        message: state.auth.message,
        books: state.books
    };
}
export default connect(mapStateToProps, actions)(Feature);