import ComponentAPI from './page2/ComponentAPI';
import ComponentLifeCycle from './page2/ComponentLifeCycle';
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setNum} from './actions/numActions'


class Page2 extends Component {
    render() {
        const {dispatch, nums} = this.props

        return (
            <div>
                <ComponentAPI/>
                <ComponentLifeCycle set_Num={() => dispatch(setNum())} {...this.props} />
            </div>
        )
    }
}

function select(state) {
    return {
        nums: state.nums
    }
}

export default connect(select)(Page2);