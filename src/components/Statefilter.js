import React, {Component, PropTypes} from 'react'
import search from './Search'

class Statefilter extends Component {
    render() {
        return (
            <div>
                Show All :<input type='radio' name='test' onChange={() => this.props.filterStatus(1)}/>
                Active   : <input type='radio' name='test' onChange={() => this.props.filterStatus(2)}/>
                UnActive : <input type='radio' name='test' onChange={() => this.props.filterStatus(3)}/>
            </div>
        )
    }
}

export default Statefilter