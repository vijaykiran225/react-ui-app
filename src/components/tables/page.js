import React, { Component } from 'react';

class Page extends Component {
    render() {

        let rowsReact = [];
        for (let rows = 0; rows < this.props.rows; rows++) {

            let tabData = [];
            for (let cols = 0; cols < this.props.cols; cols++) {
                tabData.push(<td>{this.props.text}</td>);

            }
            rowsReact.push(<tr> {tabData}</tr>);
        }

        return (
            <div>
                Page No : {this.props.pageNo + 1}
                <table cellSpacing="10" border="2">
                    {rowsReact}

                </table>
            </div>
        );
    }
}

export default Page;