import {
    ADD_TODO,
    SEARCH,
    CLEAR_FILTER,
    REMOVE,
    ACTIVE,
    FILTER_STATE, EDIT_SAVE, CANCEL_EDIT, SET_STATUS
} from '../actions/listActions'
import PropTypes from 'prop-types';
import {EDIT} from "../actions/editAction";

function filter(state, action) {
    switch (action.type) {
        case SEARCH:
            return {
                id: action.id,
                text: action.text,
            }
        default:
            return state
    }
}

function todo(state, action) {
    let maxIndex = 2;
    maxIndex = Math.max(...state.list.map(o => o.id));
    switch (action.type) {
        case ADD_TODO:
            return {
                id: maxIndex + 1,
                text: action.text,
            }
        default:
            return state
    }
}
function editsave(state, action) {


    switch (action.type) {
        case EDIT_SAVE:
            return {

                text: action.text,
            }
        default:
            return state
    }
}

let initState = {
    list: [
        {id: 1, text: 'acb', active: true},
        {id: 2, text: 'abc', active: false}
        ],
    textSearch: '',
    stateFilter: "ALL",
    idEdit: 0,
    isCreating : false
}

function todos(state = initState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {...state, list: [...state.list, todo(state, action)]}

        case EDIT_SAVE:
            return {...state,
            list : state.list.map(t => {
                if (t.id === action.id) {
                    return {...t, text : action.text}
                }
                return t
            }),
            idEdit: 0
            }

        case CANCEL_EDIT:
            return {...state,
                list : state.list.map(t => {
                    if (t.id === action.id) {
                        return {...t}
                    }
                    return t
                })
            }

        case SEARCH:
            // console.log(state);
            //  let newState = [];
            //  state.forEach(x => newState.push(Object.assign({}, x)));
            //  console.log(state);
            // state.forEach(x => newState.push(Object.assign({}, x)));
            // let newState = [{id:1, text:'acb'}, {id:2, text:'abc'}];
            // return newState.filter(x => x.text.includes(action.text));
            return {...state, textSearch: action.text};

        case CLEAR_FILTER:
            return {...state, textSearch: ''};

        case SET_STATUS:
            debugger
            return{...state, isCreating: action.isCreating}

        case ACTIVE:
            return {
                ...state,
                list: state.list.map(t => {
                    if (t.id === action.id) {
                        return {...t, active: !t.active}
                    }
                    return t
                })
            }

        case FILTER_STATE:
            return {...state, stateFilter: action.stateFilter};

        case REMOVE:
            // console.log(state);
            // let newState = {list: [], textSearch: state.textSearch};
            // state.list.forEach(x => newState.list.push(Object.assign({}, x)));
            // console.log(state);
            // newState.list = newState.list.filter(x => x.id != action.id);
            // return newState;
            state.list = state.list.filter(x => x.id != action.id);
            return {...state};
        // return {...state, list: state.list.filter(x => x.id != action.id)};

        default:
            return state
    }
}

todos.propTypes =
    {
        active: PropTypes.bool.isRequired,
    };
todos.defaultProps =
    {
        active: true
    };
export default todos