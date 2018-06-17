import React, { Component, PropTypes } from 'react'


class AddTodo extends Component {
    render() {
        return (
            <div>
                <input type = 'text' ref = 'input' />

                <button onClick = {(e) => this.handleClick(e)}>
                    Add
                </button>
                <button onClick = {() => this.props.createClick(true)}>
                    Create
                </button>
            </div>
        )
    }
    handleClick(e) {

        const node = this.refs.input
        const text = node.value.trim()
        this.props.onAddClick(text)
        node.value = ''
    }

}
export default AddTodo