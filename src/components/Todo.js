import React, {Component, PropTypes} from 'react'
import {Remove, actionActive, remove, addTodo} from '../actions/listActions'
import {edit} from '../actions/editAction'
import Edit from './Edit'
import Add from './Add'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        // this.remove = this.remove.bind(this);
    }

    render() {

        const {dispatch, id, text, active} = this.props;

        var txtName = (
            <div>
                <span style={{'marginRight': '10px'}}>id: {id}</span>
                <span>{text}</span>
            </div>
        );

        var nameDiv = (<div></div>)


        return (
            <li>



                <span    style = {{'textDecoration': active === false ? 'line-through' : 'none'}}>

                    {id != this.props.idEdit ? txtName : nameDiv}


                    <Edit idEdit = {id} />
                <span className="activeclass" style={{
                    'marginLeft': '10px',
                    'textDecoration': active === false ? 'line-through' : 'none'
                }}> {active}</span>
                </span>
                <input type="button" style={{'marginLeft': '10px'}} value={active === true ? "Active" : "NonActive"}
                       onClick={() => dispatch(actionActive(id))}/>

                <button style={{'marginLeft': '10px'}} onClick={() => dispatch(edit(id,text,active))}>
                    Edit
                </button>
                <button style={{'marginLeft': '10px'}} onClick={() => dispatch(remove(this.props.id))}>
                    Remove
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

