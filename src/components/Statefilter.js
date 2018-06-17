import React, {Component, PropTypes} from 'react'
import search from './Search'

class Statefilter extends Component {
    render() {
        return (
            <div>
                Show All :<input type='radio' name='test' onChange={() => this.props.filterStatus('ALL')}/>
                Active   : <input type='radio' name='test' onChange={() => this.props.filterStatus('ACTIVE')}/>
                UnActive : <input type='radio' name='test' onChange={() => this.props.filterStatus('UNACTIVE')}/>
            </div>
        )
    }
}

export default Statefilter