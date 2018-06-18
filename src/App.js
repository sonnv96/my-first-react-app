import React, {Component} from 'react';
import './Css/App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Content from './page1/content';
import Footer from './Home/Footer';
import Key from './page3/List';
import Page2 from "./page2";
import Header from "./Home/Header";
import page4 from "./page4";
import Page5 from "./page5";

class App extends Component {


    render() {
        return (
            <Router>
                <div>
                    <div className="App">
                        <Header/>
                        <ul>
                            <li>
                                <Link to={"/Page1"}>Page1</Link>
                                <Link to={"/Page2"}>Page2</Link>
                                <Link to={"/List"}>Page3</Link>
                                <Link to={"/page4"}>Page4</Link>
                                <Link to={"/page5"}>Page5</Link>

                            </li>
                        </ul>
                    </div>
                    <div className="App-2">


                        <Switch>
                            <Route exact path="/Page1" component={Content}/>
                            <Route exact path="/Page2" component={Page2}/>
                            <Route exact path="/List" component={Key}/>
                            <Route exact path="/page4" component={page4}/>
                            <Route exact path="/page5" component={Page5}/>
                        </Switch>


                    </div>
                    <div className="App">
                        <Footer/>
                    </div>

                </div>
            </Router>

        );
    }
}


export default App;
