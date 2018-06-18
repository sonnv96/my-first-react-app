import ComponentAPI from './page2/ComponentAPI';
import ComponentLifeCycle from './page2/ComponentLifeCycle';
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setNum} from './actions/numActions'


<<<<<<< HEAD
import {search, clearFilter} from './actions/listActions'
import Search from './components/Search.js'


=======
>>>>>>> 3be3d283d39290c667530b0c2215d850835d8a38
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