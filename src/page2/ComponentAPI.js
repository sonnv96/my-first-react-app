import React,{Component} from "react";

class ComponetAPi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.setnewState = this.setnewState.bind(this);
    };

    setnewState() {
        var item = "set state...";
        var a = this.state.data.slice();
        a.push(item);
        this.setState({data: a});


    };

    render() {
        return (
            <div>
                <button onClick={this.setnewState}>click</button>
                <p>{this.state.data}</p>
            </div>
        );
    }
}
export default ComponetAPi