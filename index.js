import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
    render(){
        return <div>hello {this.props.name}</div>
    }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="jsjjl" />, mountNode);