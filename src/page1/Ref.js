import ReactDOM from "react-dom";
import React, {Component} from "react";

class Ref extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: []
        }
        this.updatestate = this.updatestate.bind(this);
        this.clearstate = this.clearstate.bind(this);

    }

    updatestate(i) {
        this.setState({a: i.target.value})
    }

    clearstate() {
        this.setState({a: []});
        ReactDOM.findDOMNode(this.refs.b).focus();
    }

    render() {
        return (
            <div>
                <input value={this.state.a} onChange={this.updatestate} ref="b"></input>
                <button onClick={this.clearstate}>clear</button>
                <h5>{this.state.a}</h5>
            </div>
        );
    }
}
export default Ref