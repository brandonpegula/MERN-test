import React from "react";
import ReactDOm from "react-dom";

class App extends React.Component {
    render() {
        return <h1>Hello World</h1>
    }
}

ReactDOM.render(<App />,
document.getElementById('app'));