import React, {Component, PropTypes} from 'react'

import {connect} from 'react-redux'
import AddTodo from "./AddtoDo";
import {
    cancelEdit,
    CREATE_EDIT_STATUS_CREATING, CREATE_EDIT_STATUS_EDITING,
    CREATE_EDIT_STATUS_NONE,
    createEditStatus,
    editSave,
    setStatus
} from "../actions/listActions";
import {editValue, edit} from "../actions/editAction";
import MyHOC from "./MyHOC";

class Edit_Add extends Component {
    render() {

        const {dispatch} = this.props;
        const {id, active} = this.props.visibleEdit;
        let {text} = this.props.visibleEdit;
        var formEdit = (<div></div>);
        if (this.props.cES == CREATE_EDIT_STATUS_EDITING) {
            formEdit = (
                <div id="a">


                    <input type='text' value={text} onChange={(e) => dispatch(editValue(e.target.value))}/>

                    <button onClick={() => {
                        dispatch(createEditStatus(CREATE_EDIT_STATUS_NONE)), dispatch(editSave(id, text, active))
                    }}>
                        Save
                    </button>

                    <button onClick=  {() => {
                        dispatch(createEditStatus(CREATE_EDIT_STATUS_CREATING)), dispatch(cancelEdit(id))
                    }}>
                        Cancel
                    </button>
                </div>
            );
        }
        else if(this.props.cES === CREATE_EDIT_STATUS_CREATING  )
        {
            formEdit = (
                <div id="a">
                    <input type='text' ref = 'input'/>
                    <button onClick={() => {this.handleClick(), dispatch(createEditStatus(CREATE_EDIT_STATUS_NONE))}}>
                        Add
                    </button>
                    <button onClick= {() => {
                        dispatch(createEditStatus(CREATE_EDIT_STATUS_NONE))
                    }}>
                        Cancel
                    </button>
                </div>)
        }
        return formEdit;
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

export default connect(select)(Edit_Add);
