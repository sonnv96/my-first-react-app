import React,{Component} from "react";

class ComponentLifeCycle extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     a: 1
        // }
        // this.setNum = this.setNum.bind(this);
    };

    // setNum() {
    //     this.setState({a: this.state.a + 1})
    //     this.props.set_Num();
    // };

    componentDidMount() {
        console.log("com đi mount");
    };

    componentWillMount() {
        console.log("com wil mount");
    };


    render() {
        return (

                <div>
                    <button onClick={() => this.props.set_Num()}>Set Num</button>
                    <p>{this.props.nums}</p>
                </div>


        );
    }

}
export default ComponentLifeCycle