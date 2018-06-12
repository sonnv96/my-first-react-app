import React,{Component} from "react";

class A extends Component {
    render() {
        return (
            <div>
                <div>{this.props.comdata.id}</div>
                <div>{this.props.comdata.name}</div>
            </div>
        );
    }
}
export default A