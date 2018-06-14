import React, {Component, PropTypes} from 'react'
import {Remove, actionActive, remove} from '../actions/listActions'
import {edit} from '../actions/editAction'


export default class Todo extends Component {
    constructor(props) {
        super(props)
        // this.remove = this.remove.bind(this);
    }

    render() {

        const {dispatch, id, text, active} = this.props;
        return (
            <li>
                <span style={{'marginRight': '10px'}}>id: {id}</span>
                <span>name: {text} </span>
                <span className="activeclass" style={{
                    'marginLeft': '10px',
                    'textDecoration': active === false ? 'line-through' : 'none'
                }}>active: {active}</span>
                <input type="button" style={{'marginLeft': '10px'}} value={active === true ? "Active" : "NonActive"}
                       onClick={() => dispatch(actionActive(id))}/>


                <button style={{'marginLeft': '10px'}} onClick={() => dispatch(remove(this.props.id))}>
                    Remove
                </button>
                <button style={{'marginLeft': '10px'}} onClick={() => dispatch(edit(id,text,active))}>
                    Edit
                </button>


                {/*Cách gọi hai hàm */}
                {/*<button style={{'marginLeft': '10px'}} onClick = {() => {setTimeout(),dispatch(Remove(this.props.id))}}>*/}
                {/*Remove*/}
                {/*</button>*/}
            </li>
        )
    }

    // setActiveStyle(a)
    // {
    //     a = this.props.active
    //     if(a ===false)
    //     {
    //         document.getElementsByClassName('activeclass').style.textdecoration = 'line-through'
    //     }
    //
    // }


}

