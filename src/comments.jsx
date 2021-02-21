import React from "react";
import { connect } from "react-redux";
import { like, deleteComment, edit } from "./actions/index";

const mapStateToProps = state => {
    return { comments: state.comments };
};
const mapDispatchToProps = {
    like,
    deleteComment,
    edit
}


const Comments = (props) => {

    const handleLike = (comment) => {
        props.like(comment)
        // console.log(props)
    }
    const handleDelete = (comment) => {
        props.deleteComment(comment)
        // console.log(props)
    }
    const handleEdit = (comment) => {
        props.edit(comment)
        // console.log(props)
    }

    return (
        <ul>
            {props.comments.map(comment => (
                <li key={comment.id}>
                    <h3>{comment.author}</h3>
                    {comment.body}
                    <br />
                    {comment.like}
                    <button onClick={() => handleLike(comment)}>Like</button>
                    <button onClick={() => handleEdit(comment)}>Edit</button>
                    <button onClick={() => handleDelete(comment)}>Delete</button>
                </li>
            ))}
        </ul>

    )
};

const List = connect(mapStateToProps, mapDispatchToProps)(Comments);

export default List;