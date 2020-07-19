import React, { Component } from 'react';

class Vertex extends Component {


    render() {
        return (
            <circle cx={this.props.loc.x} cy={this.props.loc.y} r="10" />
        );
    }
}

export default Vertex;