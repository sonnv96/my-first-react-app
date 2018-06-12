import React,{Component} from "react";
import A from './A';

class Key extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    id: 1,
                    name: "dsds"
                },
                {
                    id: 2,
                    name: "dsd"
                },
                {
                    id: 3,
                    name: "khjkh"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.data.map((a, b) => <A key={b} comdata={a}/>)
                }
            </div>
        );
    }
}export default Key