import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid text-center">
                <div className="container">
                    <h1 className="display-3">User</h1>
                    <p className="lead">
                        json
                    </p>
                    <hr className="my-2" />
                </div>
            </div>
        );
    }
}

export default Header;