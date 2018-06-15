import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    activeFilter,
    addTodo,
    FILTER_STATE,
    filterState,
    Remove,
    setStatus,
    unactiveFilter
} from './actions/listActions'
import AddTodo from './components/AddtoDo.js'
import Edit from './components/Edit'

import { search, clearFilter } from './actions/listActions'
import Search from './components/search.js'

import TodoList from './components/TodoList.js'
import Todo from "./components/Todo";
import StateFilter from "./components/stateFilter";
import Add from './components/Add'



class page4 extends Component {
    render() {
        var nameDiv = (<div></div>)

        const { dispatch } = this.props;
        const { textSearch, list , stateFilter,idEdit,addStatus} = this.props.visibleTodos;
        let filterList = list.filter(x => x.text.includes(textSearch)
                && (stateFilter == 2 ? x.active == true : (stateFilter == 3) ? x.active == false : true));

        // filterList = this.filter(filterList);
        // if(stateFilter == 2)
        // {
        //     return x.active == true;
        // }
        // else
        //     if(stateFilter == 3)
        //     {
        //         x.active == false;
        //     }
        //     else
        //         return true
        //
        // if(stateFilter == 1)
        // {
        //     filterList = filterList.filter(x=>x.active === false)
        // }
        // else if(stateFilter == 2)
        // {
        //     filterList = filterList.filter(x=>x.active === true)
        // }

        return (
            <div>
                <Search searchClick = {text => dispatch(search(text))} clearFilter = {text => dispatch(clearFilter(text))}
                />


                <AddTodo createClick={ ()=> dispatch(setStatus(1))} addStatus = {addStatus} onAddClick = {text => dispatch(addTodo(text))} />

                <StateFilter filterStatus = {(stateFilter)=> dispatch(filterState(stateFilter))}/>

                {addStatus == 1 ? <Add onAddClick = {text => dispatch(addTodo(text))}/> : nameDiv }
                {/*<Todo removeClick = {id => dispatch(Remove(id))}/>*/}
                <TodoList idEdit={idEdit}  todos = {filterList} dispatch = {dispatch}/>

            </div>
        )
    }


    //  filter = function(list) {
    //     if(stateFilter == 1)
    //     {
    //         return list.filter(x=>x.active === false)
    //     }
    //     else if(stateFilter == 2)
    //     {
    //         return list.filter(x=>x.active === true)
    //     }
    //     else
    //         return true
    // };


}
function select(state) {
    return {
        visibleTodos: state.todos
    }
}
export default connect(select)(page4);