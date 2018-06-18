
import React from "react";
import {editValue} from "../../actions/editAction";
import {connect} from 'react-redux'

import {cancelEdit, CREATE_EDIT_STATUS_NONE, createEditStatus, editSave, setStatus} from "../../actions/listActions";

class Edit extends React.Component {
    render() {
        const {id, active} = this.props.visibleEdit;

        let {text} = this.props.visibleEdit;
        const {dispatch} = this.props;

        return (
            <div id="a">


                <input type='text' value={text} onChange={(e) => dispatch(editValue(e.target.value))}/>

                <button onClick={() => {
                    dispatch(createEditStatus(CREATE_EDIT_STATUS_NONE)), dispatch(editSave(id,text,active))
                }}>
                    Save
                </button>

                <button onClick={() => {
                    dispatch(createEditStatus(CREATE_EDIT_STATUS_NONE)), dispatch(cancelEdit(this.props.id))
                }}>
                    Cancel
                </button>
            </div>
        );


    }


}
function select(state) {
    return {
        visibleEdit: state.edit
    }
}
export default connect (select) (Edit)