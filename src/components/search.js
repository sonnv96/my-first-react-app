import React, { Component, PropTypes } from 'react'
import ReactDOM from "react-dom";

class Search extends Component {
    constructor(props)
    {
        super(props)
        this.clear = this.clear.bind(this);
        this.state = {
            a: 1
        }
    }
    render() {
        return (
            <div>
            <div>
                <input type = 'text' ref = 'input' />

                <button onClick = {(e) => this.handleClick(e)}>
                    Filter
                </button>
                <button onClick = {(i) => this.clear(i)}>
                    Clear
                </button>


            </div>
            <div>
            Show All:<input type='radio' name='test'  value='showAll'  onChange={(i)=>this.clear(i)} />
             Active  : <input type='radio' name='test'  value='a' />
            UnActive: <input type='radio' name='test'  value='asa' />

        </div>
            </div>
        )
    }
    clear(i) {
            const node = this.refs.input
            node.value = ""
            const text = node.value.trim()
            this.props.clearFilter(text)

    }
    handleClick(e) {

        const node = this.refs.input
        const text = node.value.trim()
        this.props.searchClick(text)
    }
}
export default Search