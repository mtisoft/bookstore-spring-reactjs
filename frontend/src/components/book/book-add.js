import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {saveBook} from "../../actions/book-actions";
import BookInputForm from "../parts/book-input-form";

class BookAdd extends Component {
    state = {
        show: false,
        method: "",
    };

    addBook = (book) => {
        this.props.saveBook(book);

        if (this.props.savedBookObject.book != null) {
            this.setState({
                show: true
            });
            setTimeout(() =>
                this.setState({
                    show: false,
                    method: "post"
                }), 3000);
        } else {
            this.setState({
                show: false
            });
        }
    };

    render() {
        const {show, method} = this.state;

        return (
            <BookInputForm
                addBook={this.addBook}
                show={show}
                method={method}/>
        );
    }
}

BookAdd.propTypes = {
    saveBook: PropTypes.func.isRequired,
    savedBookObject: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    savedBookObject: state.book,
});

export default connect(mapStateToProps, {saveBook})(BookAdd);