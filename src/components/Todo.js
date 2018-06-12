import React, { Component, PropTypes } from 'react'
import {Remove} from '../actions/listActions'

export default class Todo extends Component {
    constructor(props)
    {
        super(props)
        // this.remove = this.remove.bind(this);
    }

    render() {
        const { dispatch, id, text } = this.props;
        return (
            <li>
                <span style={{'marginRight': '10px'}}>id: {id}</span>
                <span>name: {text} <button onClick = {(e) => dispatch(Remove(this.props.id))}>
                    Remove
                </button></span>
            </li>
        )
    }
    remove(e) {


        const id = this.props.id


        console.log(id)
        this.props.removeClick(id)
    }
}
