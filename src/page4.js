import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addTodo, Remove} from './actions/listActions'
import AddTodo from './components/AddtoDo.js'

import { search, clearFilter } from './actions/listActions'
import Search from './components/search.js'

import TodoList from './components/TodoList.js'
import Todo from "./components/Todo";



class page4 extends Component {
    render() {
        const { dispatch } = this.props;
        const { textSearch, list } = this.props.visibleTodos;
        let filterList = list.filter(x => x.text.includes(textSearch));

        return (
            <div>
                <Search searchClick = {text => dispatch(search(text))} clearFilter = {text => dispatch(clearFilter(text))} />


                <AddTodo onAddClick = {text => dispatch(addTodo(text))} />

                {/*<Todo removeClick = {id => dispatch(Remove(id))}/>*/}
                <TodoList todos = {filterList} dispatch = {dispatch}/>
            </div>
        )
    }
}
function select(state) {
    return {
        visibleTodos: state.todos
    }
}
export default connect(select)(page4);