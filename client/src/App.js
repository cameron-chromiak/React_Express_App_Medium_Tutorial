import React, { Component } from "react";
import Nav from './components/Nav'

class App extends Component {

    // callAPI() {
    //     fetch("http://localhost:9000/testAPI")
    //         .then(res => res.text())
    //         .then(res => this.setState({ apiResponse: res }))
    //         .catch(err => err);
    // }

    componentDidMount() {
        // this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <Nav/>
            </div>
        );
    }
}

export default App;
