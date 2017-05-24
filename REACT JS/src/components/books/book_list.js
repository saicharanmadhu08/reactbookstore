import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {

        console.log(this.props.book);
        if (!this.props.book) {
            return <div></div>
        }
        return (
            <div>

                <div id="bookDetails">
                    <div id="bookImg">
                        <img src={this.props.book.CoverPic} alt="" className="img-responsive" height="300" />
                    </div>
                    <h3><b>Details of book</b></h3>
                    <div><b>Title</b>: <span className="bookDetail">{this.props.book.Title}</span></div>
                    <div><b>Author</b>: <span className="bookDetail">{this.props.book.Author}</span></div>
                    <div><b>Description</b>: <span className="bookDetail">{this.props.book.Description}</span></div>
                    <div><b>ISBN</b>: <span className="bookDetail">{this.props.book.ISBN}</span></div>
                </div>
            </div>
        );

    }
}

function mapStateToProps(state) {
    return {
        book: state.auth.book
    };
}

export default connect(mapStateToProps)(BookDetail);