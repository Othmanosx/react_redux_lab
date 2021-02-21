import { ADD_COMMENT, DELETE, EDIT } from "../constants/action-types";
import { LIKE } from "../constants/action-types";


export function addComment(payload) {
    return { type: ADD_COMMENT, payload }
};
export function like(payload) {
    return { type: LIKE, payload }
};
export function deleteComment(payload) {
    return { type: DELETE, payload }
};
export function edit(payload) {
    return { type: EDIT, payload }
};