import { combineReducers } from 'redux'
import  todos from './listReducers'
import  nums from './numReducers'

export default combineReducers({
    todos,
    nums
})
