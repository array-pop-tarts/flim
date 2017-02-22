/**
 * screening
 * Author: Barbara Goss
 * Created: 2017-02-20
 */
import React from 'react';
import firebase from 'firebase';

import Venue from './venue';

class Screening extends React.Component {

    constructor() {
        super();
        this.state = {
            screening: {},
            venue: {}
        };
    }

    render() {

        return (
            <li className="list-group-item  justify-content-between">
                <div>
                    { this.state.screening.date } @ <Venue venue={ this.state.screening.venue } />
                </div>
                <button className="btn btn-sm btn-outline-secondary">
                    <i className="fa fa-cog"></i>
                </button>
                <div className="screening-friends">
                    Evan, Richard
                </div>
            </li>
        );
    }

    componentDidMount() {
        let fireScreening = firebase.database().ref('screenings/' + this.props.screening );

        fireScreening.on('value', (snapshot) => {
            const screening = snapshot.val();
            screening.id = snapshot.key;

            this.setState({screening: screening});
        });
    }
}

export default Screening;