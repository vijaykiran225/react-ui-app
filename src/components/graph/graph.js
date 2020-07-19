import React, { Component } from 'react';
import Vertex from './vertex';
import Edge from './edge';
import mockData from '../../config/mockVertices';
import Movement from './movement';
import graphUtils from '../../utils/graphUtils';


class Graph extends Component {



    getReactVertices(mock) {
        let collection = [];
        for (const key in mock) {
            if (mock.hasOwnProperty(key)) {
                const vertexLoc = mock[key];
                collection.push(<Vertex loc={vertexLoc}></Vertex>);
            }
        }
        return collection;
    }

    getReactEdges(mock) {
        let collection = [];
        mock.forEach(aEdge => {

            collection.push(
                <Edge
                    from={aEdge.from}
                    to={aEdge.to}
                    direction={aEdge.direction}
                />
            );

        });
        return collection;
    }

    getReactMovements(mock) {
        let collection = [];

        mock.forEach(aFlow => {
            collection.push(
                <Movement
                    edges={aFlow}
                    ballColor={graphUtils.getRandomColor()}
                />
            );
        });

        return collection;
    }

    getValues() {
        let values = {
            vertices: this.getReactVertices(mockData.vertices),
            edges: this.getReactEdges(mockData.edges),
            movements: this.getReactMovements(mockData.movements)
        }

        return values;
    }


    render() {
        let data = this.getValues();
        return (
            <div>
                <svg>
                    {data.vertices}
                    {data.edges}
                    {data.movements}
                </svg>
            </div>
        );
    }
}

export default Graph;