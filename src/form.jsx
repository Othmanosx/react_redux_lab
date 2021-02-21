import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment } from "./actions/index";

function mapDispatchToProps(dispatch) {
    return {
        addComment: comment => dispatch(addComment(comment))
    };
}

class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: "",
            body: "",
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { author, body } = this.state;
        this.props.addComment({ author, body });
        this.setState({ author: "", body: "" });
    }
    render() {
        const { author, body } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="body">Body</label>
                    <input
                        type="textarea"
                        id="body"
                        value={body}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit">SAVE</button>
            </form>
        );
    }
}

const Form = connect(
    null,
    mapDispatchToProps
)(ConnectedForm);

export default Form;