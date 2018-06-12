import React,{Component} from "react";

class Forms extends Component {
    constructor(props) {
        super(props);

        this.state = {
            a: "âsasasas"
        }
        this.updateState = this.updateState.bind(this);

    }

    updateState(i) {
        this.setState({a: i.target.value});
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.updateState} value={this.state.a}/>
                <h4>{this.state.a}</h4>
            </div>
        );
    }
}
export default Forms
