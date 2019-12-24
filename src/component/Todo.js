import React, {Component} from "react";

export default class Todo extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <input type='button' onClick={this.props.updateCount}/>
        );
    }
}