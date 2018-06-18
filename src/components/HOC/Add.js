import React from "react";
import {connect} from 'react-redux'
import {CREATE_EDIT_STATUS_NONE, createEditStatus, setStatus} from "../../actions/listActions";
class Add extends React.Component {
    render()
    {
        const {dispatch} = this.props;


        return(
            <div id="a">
                <input type='text' ref = 'input'/>
                <button onClick={() => {this.handleClick(), dispatch(createEditStatus(CREATE_EDIT_STATUS_NONE))}}>
                    Add
                </button>
                <button onClick =  {() => {
                    dispatch(createEditStatus(CREATE_EDIT_STATUS_NONE))
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
export default connect (select)(Add)