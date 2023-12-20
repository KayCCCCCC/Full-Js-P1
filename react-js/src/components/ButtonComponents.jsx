import React from "react";

class ButtonComponents extends React.Component {
    state = {
        count: 0
    }

    handleClick = (event) => {
        const { count } = this.state;
        alert(count);
        this.setState({ count: count + 1 });
    };
    render() {
        return (
            <button className="bg-red-600 hover:bg-blue-500" onClick={(event) => this.handleClick(event)}> Click me: {this.props.count}</button>
        )
    }
}

export default ButtonComponents