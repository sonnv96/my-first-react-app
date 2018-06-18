import { EDIT, CHANGE_TEXT } from "../actions/editAction";


function edit(state = {id : '', text:'',active:''}, action) {
    switch (action.type) {
        case EDIT:
            return {
                id: action.id,
                text: action.text,
                active:action.active
            }
        case CHANGE_TEXT:
            return {...state, text: action.value}
        default:
            return state
    }
}
export default edit