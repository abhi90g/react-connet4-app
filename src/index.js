import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/css/App.css';

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <ExampleConnectMain />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.root')); 