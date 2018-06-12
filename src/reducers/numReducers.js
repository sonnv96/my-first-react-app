import { SET_NUM } from '../actions/numActions'

function nums(state = 0, action) {
    switch (action.type) {
        case SET_NUM:
            console.log(state);
            return 2;
        default:
            return state
    }
}
export default nums