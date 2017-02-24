/**
 * screening
 * Author: Barbara Goss
 * Created: 2017-02-20
 */
import React from 'react';
import firebase from 'firebase';

import Venue from './venue';
import User from './user';

class Screening extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <li className="list-group-item  justify-content-between">
                <div>
                    { this.props.screening.date } @ <Venue venue={this.props.screening.venueInfo } />
                </div>
                <button className="btn btn-sm btn-outline-secondary">
                    <i className="fa fa-cog"></i>
                </button>
                <div className="screening-friends">
                    { this.displayUsers(this.props.screening.usersInfo)}
                </div>
            </li>
        );
    }

    displayUsers(users) {
        let names = users.map(user => {
            return user.name;
        });
        return names.join(', ');
    }

}

export default Screening;