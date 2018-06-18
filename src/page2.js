import ComponentAPI from './page2/ComponentAPI';
import ComponentLifeCycle from './page2/ComponentLifeCycle';


import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTodo} from './actions/listActions'
import {setNum} from './actions/numActions'


import {search, clearFilter} from './actions/listActions'
import Search from './components/Search.js'


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