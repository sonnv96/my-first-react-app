export const ADD_TODO = 'ADD_TODO'
export const SEARCH = 'SEARCH'
export const CLEAR_FILTER = 'CLEAR_FILTER'
export const REMOVE = 'REMOVE'
export const ACTIVE = 'ACTIVE'
export const FILTER_STATE = 'FILTER_STATE'
export const EDIT_SAVE = 'EDIT_SAVE'
export const CANCEL_EDIT = 'CANCEL_EDIT'
export const SET_STATUS = 'SET_STATUS'



let nextTodoId = 0;

export function editSave(id, text, active) {
    return {
        type: EDIT_SAVE,
        id,
        text,
        active
    };
}
export function addTodo(text) {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text
    };
}
    export function setStatus(status) {
    return {
        type: SET_STATUS,

        status
    };
}
export function cancelEdit(id) {
    return {
        type: CANCEL_EDIT,
        id

    };
}

export function search(text) {
    return {
        type: SEARCH,
        text
    };
}



export function actionActive(id) {
    return {
        type: ACTIVE,
        id

    };
}

export function remove(id) {
    return {
        type: REMOVE,
        id

    };
}

export function filterState(stateFilter) {
    return {
        type: FILTER_STATE,
        stateFilter

    };
}

export function clearFilter(text) {
    return {
        type: CLEAR_FILTER,
        text: text
    };
}