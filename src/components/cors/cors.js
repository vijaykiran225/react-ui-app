import React, { Component } from 'react';

const axios = require('axios').default;

class CorsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serv1: "",
            serv2: "",
            host: "localhost",
            port: "8080"
        }
        this.handleChange = this.handleChange.bind(this);
        this.takeHost = this.takeHost.bind(this);
        this.takePort = this.takePort.bind(this);
    }

    handleChange(e) {
        axios({
            method: "GET",
            url: "/jenkins",
            headers: { 'X-hostName': this.state.host, 'X-portName': this.state.port },

        })
            .then(x => x.data)
            .then(x => this.setState({ serv1: x }))
            .catch(x => this.setState({ serv1: "failed" }));

        // axios({
        //     method: "GET",
        //     url: "/s2",

        //     headers: { 'X-hostName': this.state.host, 'X-portName': this.state.port },
        // })
        //     .then(x => x.data)
        //     .then(x => this.setState({ serv2: x }))
        //     .catch(x => this.setState({ serv2: "failed" }));

        // axios({
        //     method: "POST",
        //     url: "/postData",
        //     data: {
        //         name: "vijay"
        //     }
        // })
        //     .then(x => x.data)
        //     .then(x => this.setState({ serv1: x }))
        //     .catch(x => this.setState({ serv1: "failed" }));

    }


    takeHost(e) {
        this.setState({
            host: e.target.value
        });
    }

    takePort(e) {
        this.setState({
            port: e.target.value
        });
    }

    render() {
        return (
            <div>

                host : <input type="text" id="hostName" onChange={this.takeHost} /><br />
                port : <input type="text" id="portName" onChange={this.takePort} /><br />

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