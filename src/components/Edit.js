import React, {Component, PropTypes} from 'react'

import {connect} from 'react-redux'
import AddTodo from "./AddtoDo";
import {cancelEdit, CREATE_EDIT_STATUS_EDITING2, editSave, setStatus} from "../actions/listActions";
import {editValue, edit} from "../actions/editAction";

class Edit extends Component {
    render() {

        const {dispatch} = this.props;
        const {id, active} = this.props.visibleEdit;
        let {text} = this.props.visibleEdit;
        var formEdit = (<div></div>);
        if (id != '' && id === this.props.idEdit && this.props.cES == CREATE_EDIT_STATUS_EDITING2) {
            formEdit = (
                <div id="a">

                    <input type='text' value={text} onChange={(e) => dispatch(editValue(e.target.value))}/>

                    <button onClick={() => {
                        dispatch(edit('', '', '')), dispatch(editSave(id, text, active))
                    }}>
                        Save
                    </button>

                    <button onClick=  {() => {
                        dispatch(edit('', '', '')), dispatch(cancelEdit(id))
                    }}>
                        Cancel
                    </button>
                </div>
            );
        }

        return formEdit;
}
}


function select(state) {
    return {
        visibleEdit: state.edit
    }
}

export default connect(select)(Edit);
