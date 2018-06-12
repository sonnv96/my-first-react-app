export const ADD_TODO = 'ADD_TODO'
export const SEARCH = 'SEARCH'
export const CLEAR_FILTER = 'CLEAR_FILTER'
export const REMOVE = 'REMOVE'





let nextTodoId = 0;


export function addTodo(text) {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text
    };
}
export function search(text) {
    return {
        type: SEARCH,
        text
    };
}

export function Remove(id) {
    return {
        type: REMOVE,
        id

    };
}




export function clearFilter(text)
{
    return{
        type: CLEAR_FILTER,
        text : text
    };
}