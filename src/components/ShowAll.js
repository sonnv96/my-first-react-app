import React, { Component, PropTypes } from 'react'
import search from './search'
class ShowAll extends Component {
    render() {
        return (
            <div>
                <input type='radio' name='test'  value='showAll' checked={()=>search.handleClick('ab')}/>
                <input type='radio' name='test'  value='a' />
                <input type='radio' name='test'  value='asa' checked={(e)=> search.handleClick(e)}/>
            </div>
        )
    }

}
export default ShowAll