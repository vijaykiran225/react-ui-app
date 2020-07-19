import React, { Component } from 'react';
import graphUtils from '../../utils/graphUtils';

class Edge extends Component {

    getPath(from, to, direction) {
        return graphUtils.getEdgePath(from, to, direction);
    }


    render() {

        let path = this.getPath(
            this.props.from,
            this.props.to,
            this.props.direction
        );

        return (
            <path d={path} style={{ stroke: "#006666", fill: "none" }} />
        );
    }
}

export default Edge;