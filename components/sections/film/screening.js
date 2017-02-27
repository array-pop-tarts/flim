/**
 * screening
 * Author: Barbara Goss
 * Created: 2017-02-20
 */
import React from 'react';
import moment from 'moment';

import Venue from './venue';
import User from './user';

class Screening extends React.Component {

    constructor() {
        super();

        this.displayDate = this.displayDate.bind(this);
    }

    render() {
        this.displayDate();
        return (
            <li className="list-group-item  justify-content-between">
                <div>
                    { this.displayDate() } @ <Venue venue={this.props.screening.venueInfo } />
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

    displayDate() {
        return moment(this.props.screening.date).format('YYYY-MM-DD');
    }

    displayUsers(users) {
        let names = users.map(user => {
            return user.name;
        });
        return names.join(', ');
    }

}

export default Screening;