import React, {Component, PropTypes} from 'react'

import Todo from "./Todo";

export default class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map(todo =>
                    <Todo idEdit={this.props.idEdit}
                    key = {todo.id}
                    {...todo}
                    dispatch = {this.props.dispatch}
                    />
                    )}
            </ul>
        )
    }
}