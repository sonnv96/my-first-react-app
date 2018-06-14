import React, {Component, PropTypes} from 'react'

import {connect} from 'react-redux'
import AddTodo from "./AddtoDo";
import {editSave} from "../actions/listActions";
import {editValue, edit} from "../actions/editAction";

class Edit extends Component {
    render() {

        const {dispatch} = this.props;
        const {id, active} = this.props.visibleEdit;
        let {text} = this.props.visibleEdit;
        var formEdit = (<div></div>);

        if (text != "") {
            formEdit = (
                <div id="a">


                    <input type='text' value={text} onChange={(e) => dispatch(editValue(e.target.value))}/>

                    <button onClick={() => {
                        dispatch(edit('', '', '')), dispatch(editSave(id, text, active))
                    }}>
                        Save
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
