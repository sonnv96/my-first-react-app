
export const EDIT = 'EDIT'
export const CHANGE_TEXT = 'CHANGE_TEXT'

export function edit(id, text, active) {
    return {
        type: EDIT,
        id,
        text,
        active
    };
}

export function editValue(value) {
    return {
        type: CHANGE_TEXT,
        value
    };
}

