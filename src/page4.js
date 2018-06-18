import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    activeFilter,
    addTodo, CREATE_EDIT_STATUS_CREATING, createEditStatus,
    FILTER_STATE,
    filterState,
    Remove,
    ACTIVE, UNACTIVE,
    unactiveFilter
} from './actions/listActions'
import AddTodo from './components/AddtoDo.js'
import Edit from './components/Edit'

import { search, clearFilter } from './actions/listActions'
import Search from './components/Search.js'

import TodoList from './components/TodoList.js'
import Todo from "./components/Todo";
import StateFilter from "./components/Statefilter";
<<<<<<< HEAD
import Edit_Add from './components/Edit_Add'
=======
import Add from './components/Add'
>>>>>>> 3be3d283d39290c667530b0c2215d850835d8a38



class page4 extends Component {
    render() {


        const { dispatch } = this.props;
        const { textSearch, list , stateFilter,idEdit,cES} = this.props.visibleTodos;
        let filterList = list.filter(x => x.text.includes(textSearch)
<<<<<<< HEAD
                && (stateFilter == ACTIVE ? x.active == true : (stateFilter == UNACTIVE) ? x.active == false : true));
=======
                && (stateFilter == 'ACTIVE' ? x.active == true : (stateFilter == 'UNACTIVE') ? x.active == false : true));
>>>>>>> 3be3d283d39290c667530b0c2215d850835d8a38

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
                {/*Search và Clear*/}
                <Search searchClick = {text => dispatch(search(text))} clearFilter = {text => dispatch(clearFilter(text))}
                />

                {/*Add*/}
<<<<<<< HEAD
                <AddTodo createClick={ ()=> dispatch(createEditStatus(CREATE_EDIT_STATUS_CREATING))}  onAddClick = {text => dispatch(addTodo(text))} />
                {/*Filter theo all, active and unactive*/}
                <StateFilter filterStatus = {(stateFilter)=> dispatch(filterState(stateFilter))}/>
                {/*Add*/}

                <Edit_Add cES = {cES} onAddClick = {text => dispatch(addTodo(text))}/>
=======
                <AddTodo createClick={ ()=> dispatch(setStatus(true))}  onAddClick = {text => dispatch(addTodo(text))} />
                {/*Filter theo all, active and unactive*/}
                <StateFilter filterStatus = {(stateFilter)=> dispatch(filterState(stateFilter))}/>
                {/*Add*/}
                {isCreating == true ? <Add onAddClick = {text => dispatch(addTodo(text))}/> : nameDiv }
>>>>>>> 3be3d283d39290c667530b0c2215d850835d8a38
                {/*<Todo removeClick = {id => dispatch(Remove(id))}/>*/}
                {/*Hiện thị list*/}
                <TodoList idEdit={idEdit} cES = {cES}  todos = {filterList} dispatch = {dispatch}/>

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