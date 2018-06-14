import { combineReducers } from 'redux'
import  todos from './listReducers'
import  nums from './numReducers'
import  edit from './editReducer'

export default combineReducers({
    todos,
    nums,
    edit
})
