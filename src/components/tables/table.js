import React, { Component } from 'react';
import Page from './page';

class Tables extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: 1,
            rows: 1,
            cols: 1,
            content: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    handleChange(e) {

    }

    updateState(e) {
        this.setState({
            pages: e.target.id === "pages" ? e.target.value : this.state.pages,
            rows: e.target.id === "row" ? e.target.value : this.state.rows,
            cols: e.target.id === "col" ? e.target.value : this.state.cols,
            content: e.target.id === "content" ? e.target.value : this.state.content,
        })
    }

    render() {

        let pages = [];
        for (let index = 0; index < this.state.pages; index++) {
            pages.push(
                <div>
                    <Page pageNo={index} rows={this.state.rows} cols={this.state.cols} text={this.state.content}></Page>
                    <hr></hr>
                </div>);
        }

        return (
            <div>
                pages : <input type="text" id="pages" onChange={this.updateState} /><br />
                row : <input type="text" id="row" onChange={this.updateState} /><br />
                col : <input type="text" id="col" onChange={this.updateState} /><br />
                Content : <input type="text" id="content" onChange={this.updateState} /><br /><br /><br />
                {pages}
            </div>
        );
    }
}

export default Tables;