import React, {Component, PropTypes} from 'react'
import search from './Search'
import {UNACTIVE,ACTIVE,ALL} from "../actions/listActions";

class Statefilter extends Component {
    render() {
        return (
            <div>
<<<<<<< HEAD
                Show All :<input type='radio' name='test' onChange={() => this.props.filterStatus(ALL)}/>
                Active   : <input type='radio' name='test' onChange={() => this.props.filterStatus(ACTIVE)}/>
                UnActive : <input type='radio' name='test' onChange={() => this.props.filterStatus(UNACTIVE)}/>
=======
                Show All :<input type='radio' name='test' onChange={() => this.props.filterStatus('ALL')}/>
                Active   : <input type='radio' name='test' onChange={() => this.props.filterStatus('ACTIVE')}/>
                UnActive : <input type='radio' name='test' onChange={() => this.props.filterStatus('UNACTIVE')}/>
>>>>>>> 3be3d283d39290c667530b0c2215d850835d8a38
            </div>
        )
    }
}

export default Statefilter