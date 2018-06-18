 import React, {Component, PropTypes} from 'react'

import {connect} from 'react-redux'
import AddTodo from "./AddtoDo";
import {cancelEdit, editSave, setStatus} from "../actions/listActions";
import {editValue, edit} from "../actions/editAction";

class Add extends Component {
    render() {
        const {dispatch} = this.props;




        return  (<div id="a">
            <input type='text' ref = 'input'/>
            <button onClick={() => {this.handleClick(), dispatch(setStatus(false))
            }}>
                Add
            </button>
            <button onClick=  {() => {
                dispatch(setStatus(false))
            }}>
                Cancel
            </button>
        </div>);
    }
    handleClick(e) {

        const node = this.refs.input
        const text = node.value.trim()
        this.props.onAddClick(text)

    }
}

function select(state) {
    return {
        visibleEdit: state.edit
    }
}

export default connect(select)(Add);
