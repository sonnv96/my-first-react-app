import React from 'react';
import {connect} from "react-redux";

import {editValue} from "../actions/editAction";
import {
    cancelEdit,
    CREATE_EDIT_STATUS_CREATING, CREATE_EDIT_STATUS_EDITING,
    CREATE_EDIT_STATUS_NONE,
    editSave,
    setStatus
} from "../actions/listActions";
import Add from './HOC/Add'
import Edit from './HOC/Edit'




var newData = {
    data: 'Data from HOC...',
}

var MyHOC = (Add, Edit) => class extends React.Component {

    render() {
    if(this.props.cES ===CREATE_EDIT_STATUS_CREATING)
        return <Add {...this.props} {...this.state} />;
    else if(this.props.cES === CREATE_EDIT_STATUS_EDITING)
            return <Edit {...this.props} {...this.state} />;
    else
        return(<div></div>)

    }
};







// export const components =  [MyHOC(Edit), MyHOC(Add)]
export default (MyHOC(Add, Edit));

