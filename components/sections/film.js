/**
 *
 * Author: Barbara Goss
 * Created: 2017-02-20
 */
import React from 'react';
import firebase from 'firebase';

import Rating from './film/rating';
import ReleasedYear from './film/released_year';
import ScreenedYear from './film/screened_year';

import Screenings from './film/screenings';
import AddScreeningButton from './film/add-screening-button';
import ScreeningForm from './film/screening-form';

import AvailableMedia from './film/available_media';
import AddMediaButton from './film/add-media-button';
import MediaForm from './film/media-form';

class Film extends React.Component {

    constructor() {
        super();

        this.state = {
            rating: null,
            showForms: {
                Screening: false,
                Media: false
            }
        };

        this.renderRating = this.renderRating.bind(this);
        this.renderScreenings = this.renderScreenings.bind(this);
        this.renderMedia = this.renderMedia.bind(this);

        this.highlightRating = this.highlightRating.bind(this);
        this.changeRating = this.changeRating.bind(this);

        this.displayScreeningForm = this.displayScreeningForm.bind(this);
        this.displayMediaForm = this.displayMediaForm.bind(this);
    }

    render() {

        let film = this.props.film;
        let ratedClass = (film.rating) ? "" : "unrated";

        return (
            <div className="col-24 col-sm-12 col-xl-6">
                <div className="card film-card">

                    <div className="card-header">
                        <div className="d-flex justify-content-start">
                            <div>
                                <h3>{ film.title }</h3>
                                <h4>{ film.translation }</h4>
                            </div>
                            <div className="ml-auto">
                                <ReleasedYear year={ film.released } />
                            </div>
                        </div>
                        <div className={ "rating h6 " + ratedClass }>
                            { this.renderRating(film.rating) }
                        </div>
                    </div>

                    <div className="card-block">
                        <div className="film-media mb-2">
                            { this.state.showForms.Media ? <MediaForm filmId={this.props.film.id} /> : null }
                            { this.renderMedia() }
                        </div>
                        <div className="film-screenings">
                            { this.state.showForms.Screening ? <ScreeningForm filmId={this.props.film.id} /> : null }
                            { this.renderScreenings() }
                        </div>
                    </div>

                </div>
            </div>
        );
    }

    renderRating(rating) {

        if (rating === undefined)
            rating = 0;

        let ratingLinks = [];
        let selected = false;

        for (let i = 1; i <= 10; i++) {
            selected = i <= rating;

            ratingLinks.push(
                <Rating selected={selected}
                        key={i}
                        index={i}
                        highlightRating={ (rating) => this.highlightRating(rating) }
                        changeRating={ (rating) => this.changeRating(rating) } />
            );
        }
        return ratingLinks;
    }

    renderScreenings() {
        if (this.props.screeningsInfo.length) {
            return (
                <div className="screenings">
                    <ul className="list-group">
                        <Screenings screeningsInfo={ this.props.screeningsInfo } />
                    </ul>
                </div>
            )
        }
        else {
            return (
                <div className="text-center">
                    <AddScreeningButton
                        expanded={true}
                        onToggleForm={ (e) => this.displayScreeningForm }
                    />
                </div>
            );
        }
    }

    renderMedia() {
        if (this.props.mediaInfo.length) {
            return (
                <div className="available-media">
                    <AvailableMedia mediaInfo={ this.props.mediaInfo }/>
                    <AddMediaButton
                        expanded={false}
                        onToggleForm={ (e) => this.displayMediaForm }
                    />
                </div>
            )
        }
        else
            return (
                <div className="text-center">
                    <AddMediaButton
                        expanded={true}
                        onToggleForm={ (e) => this.displayMediaForm }
                    />
                </div>
            );
    }

    highlightRating(rating) {
        this.setState({rating: rating});
        this.ratings(rating);
    }

    changeRating(rating) {
        const fireFilmRating = firebase.database().ref('films/' + this.props.film.id + '/rating');
        fireFilmRating.set(rating);
    }

    displayScreeningForm() {
        let showForms = this.state.showForms;
        showForms.Screening = (!this.state.showForms.Screening);
        this.setState({showForms: showForms});
    }
    displayMediaForm() {
        let showForms = this.state.showForms;
        showForms.Media = (!this.state.showForms.Media);
        this.setState({showForms: showForms});
    }
}

export default Film;