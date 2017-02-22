/**
 * venue
 * Author: Barbara Goss
 * Created: 2017-02-21
 */
import React from 'react';
import firebase from 'firebase';

class Venue extends React.Component {

    constructor() {
        super();
        this.state = {
            venue: {}
        };
    }

    render() {
        return (
            <span>
                { this.state.venue.name }
            </span>
        );
    }

    componentDidMount() {
/*
        if (this.props.venue !== undefined) {
            const fireVenue = firebase.database().ref('venues/' + this.props.venue);

            console.log(this.props.venue);

            fireVenue.on('value', (snapshot) => {
                const venue = snapshot.val();
                venue.id = snapshot.key;
                this.setState({venue: venue});
            });
        }*/
    }
}

export default Venue;