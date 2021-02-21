import { ADD_COMMENT, DELETE, EDIT } from "../constants/action-types";
import { LIKE } from "../constants/action-types";

const initialState = {
    comments: []
};
let previd = -2
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COMMENT:
            const { payload } = action
            previd++
            return {
                comments: [...state.comments, { ...payload, id: previd + 1, like: 0 }]
            }
        case LIKE:
            state.comments[state.comments.indexOf(action.payload)].like++
            return {
                comments: [...state.comments]
            }
        case DELETE:
            return {
                comments: [...state.comments.filter(comment => comment.id !== action.payload.id)]
            }
        case EDIT:
            state.comments[state.comments.indexOf(action.payload)].body = prompt('new comment : ', action.payload.body)
            return {
                comments: [...state.comments]
            }

        default:
            return state;
    }

}

export default rootReducer;