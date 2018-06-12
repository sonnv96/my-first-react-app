import React, { Component } from 'react';
import Ref from './Ref';
import Forms from './Form';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "this is content  "
        }
    }
    render() {
        return (
            <div>{this.state.noidung}

                <h3><Forms/></h3>
                <h2><Ref/></h2>
            </div>


        );

    }
}
export default Content;