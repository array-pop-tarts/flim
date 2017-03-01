/**
 * screening-form
 * Author: Barbara Goss
 * Created: 2017-02-26
 */
import React from 'react';
import firebase from 'firebase';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import VenuesHelperList from './venues-helper-list';

class ScreeningForm extends React.Component {

    constructor() {
        super();
        this.state = {
            date: moment(),
            selectedVenue: {
                id: null,
                name: ""
            },
            users: [],

            showHelpers: {
                Venues: false,
                Users: false
            },

            venuesList: []
        };

        this.toggleVenuesHelper = this.toggleVenuesHelper.bind(this);
        this.renderVenuesHelper = this.renderVenuesHelper.bind(this);

        this.onDateChange = this.onDateChange.bind(this);
        this.onVenueChange = this.onVenueChange.bind(this);
        this.onUsersChange = this.onUsersChange.bind(this);
    }

    render() {
        return (
            <form className="add-screening m-2" onSubmit={ (e) => this.onSaveScreening(e)}>
                <div className="row">
                    <div className="col">
                        <DatePicker selected={ this.state.date }
                                    className="form-control form-control-sm"
                                    dateFormat="YYYY-MM-DD"
                                    onChange={ this.onDateChange }
                        />
                    </div>
                    <div className="col">
                        <input type="text"
                               className="form-control form-control-sm"
                               placeholder="Venue"
                               value={ this.state.selectedVenue.name }
                               onFocus={ this.toggleVenuesHelper }
                               onChange={ this.onVenueChange }
                        />
                        { this.state.showHelpers.Venues ? this.renderVenuesHelper() : null}
{/*
                        <select className="form-control form-control-sm"
                                value={this.state.venue}
                                onChange={ this.onVenueChange }
                        >
                            <option value="">--</option>
                            {
                                Object.keys(this.props.venuesList).map((key, i) => {
                                    return (
                                        <option value={key} key={i}>
                                            { this.props.venuesList[key].name }
                                        </option>
                                    )
                                })
                            }
                        </select>
*/}
                    </div>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input className="form-check-input"
                               type="checkbox"
                               value="-345iop"
                               onChange={ this.onUsersChange }
                        />
                        Evan
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input className="form-check-input"
                               type="checkbox"
                               value="-456jkl"
                               onChange={ this.onUsersChange }
                        />
                        Richard
                    </label>
                </div>
                <button className="btn btn-sm btn-success">
                    <i className="fa fa-check"></i>
                </button>
            </form>
        );
    }

    toggleVenuesHelper() {
        let showHelpers = this.state.showHelpers;
        showHelpers.Venues = (! this.state.showHelpers.Venues);
        this.setState({showHelpers: showHelpers});
    }

    renderVenuesHelper() {
        return (
            <div className="list-group">
                {
                    this.state.venuesList.map((venue, i) => {
                        return (
                            <button
                               className="list-group-item list-group-item-action"
                               key={i}
                               onClick={ (e) => this.selectVenue(venue, e) }
                            >
                                { venue.name }
                            </button>
                        )
                    })
                }
                <button
                   className="list-group-item list-group-item-action text-center"
                   onClick={ this.toggleVenuesHelper }
                ><small>close</small></button>
            </div>
        );
    }

    selectVenue(venue, e) {
        e.preventDefault();
        let selectedVenue = {
            id: venue.id,
            name: venue.name
        };
        this.setState({
            selectedVenue: selectedVenue
        });
        this.toggleVenuesHelper();
    }

    onDateChange(date) {
        this.setState({ date: date });
    }

    onVenueChange(e) {
        this.setState({ venue: e.target.value });
    }

    onUsersChange(e) {
        let users = this.state.users;
        if (users.includes(e.target.value)) {
            let index = users.indexOf(e.target.value);
            users.splice(index, 1);
        }
        else
            users.push(e.target.value);
        this.setState({ users: users });
    }

    onSaveScreening(e) {
        e.preventDefault();
        const fireScreenings = firebase.database().ref('screenings');

        let selectedDate = (this.state.date);
        let screened = selectedDate._d.getTime();

        let users = {};
        this.state.users.map(user => {
            users[user] = true;
        });

        const screening = {
            date: screened,
            venue: this.state.selectedVenue.id,
            users: users
        };

        let timestamp = new Date(screening.date);
        let newScreenedYear = timestamp.getFullYear();

        let savedScreenedYearRef = firebase.database().ref('/films/' + this.props.filmId + '/screened');
        let savedScreenedYear = null;
        savedScreenedYearRef.on('value', snapshot => {
            savedScreenedYear = snapshot.val();
        });

        let newScreening = {};
        if (! savedScreenedYear || (newScreenedYear < savedScreenedYear)) {
            newScreening['/films/' + this.props.filmId + '/screened'] = newScreenedYear;
        }

        let newFireScreening = fireScreenings.push(screening);

        newScreening['/films/' + this.props.filmId + '/screenings/' + newFireScreening.key] = true;

        firebase.database().ref().update(newScreening);

        this.setState({
            selectedVenue: {
                id: null,
                name: ""
            }
        });
    }

    componentDidMount() {
        let fireVenues = firebase.database().ref('venues');
        fireVenues.orderByChild('name').on('child_added', snapshot => {
            this.setState(currentState => {
                const newState = Object.assign({}, currentState);
                newState.venuesList = newState.venuesList.concat({
                    id: snapshot.key,
                    name: snapshot.val().name
                });
                return newState;
            })
        });
    }
}

export default ScreeningForm;