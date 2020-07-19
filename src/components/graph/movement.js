import React, { Component } from 'react';
import graphUtils from '../../utils/graphUtils';

class Movement extends Component {

    getPath(edges) {

        let path = graphUtils.getPenPointString(edges[0].from);

        for (let index = 0; index < edges.length; index++) {
            const edge = edges[index];
            path = path + graphUtils.getPathString(edge.from, edge.to, edge.direction);
        }
        return path;

    }

    render() {
        const speed = "10s";
        let path = this.getPath(this.props.edges);

        return (
            <circle r="5" fill={this.props.ballColor}>
                <animateMotion dur={speed} repeatCount="indefinite"
                    path={path} />

            </circle>
        );
    }
}

export default Movement;