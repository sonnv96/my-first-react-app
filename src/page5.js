import React, {Component} from 'react'
import {connect} from 'react-redux'
import MyHOC from './components/MyHOC'
import TodoList from './components/TodoList'
import {
    addTodo,
    CREATE_EDIT_STATUS_CREATING,
    filterState,
    createEditStatus,
    ACTIVE,
    UNACTIVE
} from "./actions/listActions";
import AddTodo from './components/AddtoDo'
import Statefilter from './components/Statefilter'
import Add from './components/HOC/Add'

class Page5 extends Component {
    render() {

        const { dispatch } = this.props;
        const { textSearch, list , stateFilter,idEdit,cES} = this.props.visibleTodos;
        let filterList = list.filter(x => x.text.includes(textSearch)
            && (stateFilter == ACTIVE ? x.active == true : (stateFilter == UNACTIVE) ? x.active == false : true));
        return (
            <div>
                <AddTodo createClick={ ()=> dispatch(createEditStatus(CREATE_EDIT_STATUS_CREATING))}  onAddClick = {text => dispatch(addTodo(text))} />
                <Statefilter filterStatus = {(stateFilter)=> dispatch(filterState(stateFilter))}/>

                <TodoList idEdit={idEdit} cES = {cES}  todos = {filterList} dispatch = {dispatch}/>
                <MyHOC  cES= {cES} onAddClick = {text => dispatch(addTodo(text))}/>


            </div>
        )
    }
}

function select(state) {
    return {
        visibleTodos: state.todos
    }
}
export default connect(select)(Page5);
