import React, { Component } from 'react';

const axios = require('axios').default;

class CorsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serv1: "",
            serv2: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        // axios({
        //     method: "GET",
        //     url: "/jenkins"
        // })
        //     .then(x => x.data)
        //     .then(x => this.setState({ serv1: x }))
        //     .catch(x => this.setState({ serv1: "failed" }));

        axios({
            method: "GET",
            url: "/s2"
        })
            .then(x => x.data)
            .then(x => this.setState({ serv2: x }))
            .catch(x => this.setState({ serv2: "failed" }));

        axios({
            method: "POST",
            url: "/postData",
            data: {
                name: "vijay"
            }
        })
            .then(x => x.data)
            .then(x => this.setState({ serv1: x }))
            .catch(x => this.setState({ serv1: "failed" }));

    }
    render() {
        return (
            <div>

                <button
                    id="2"
                    onClick={this.handleChange}
                >
                    try
                </button>
                <br />
                <br />
                    jenkins :  {this.state.serv1}
                <br />
                    prs : {this.state.serv2}

            </div>
        );
    }
}

export default CorsComponent;