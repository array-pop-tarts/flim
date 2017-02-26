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

import AvailableMedia from './film/available_media';
import AddMediaButton from './film/add-media-button';
import MediaForm from './film/media-form';
import Screenings from './film/screenings';

class Film extends React.Component {

    constructor() {
        super();

        this.state = {
            rating: null
        };

        this.ratings = this.ratings.bind(this);
        this.media = this.media.bind(this);

        this.highlightRating = this.highlightRating.bind(this);
        this.changeRating = this.changeRating.bind(this);
    }

    render() {

        let film = this.props.film;
        let ratedClass = (film.rating) ? "" : "unrated";

        return (
            <div className="col-24 col-sm-12 col-xl-6">
                <div className="card film-card">

                    <div className="card-header">
                        <h3>{ film.title }</h3>
                        <h4>{ film.translation }</h4>
                        <div className={ "rating h6 " + ratedClass }>
                            { this.ratings(film.rating) }
                        </div>
                    </div>

                    <div className="card-block">

                        <div className="row text-center film-years">
                            <ReleasedYear year={ film.released } />
                            <ScreenedYear year={ film.screened } />
                        </div>

                        <div className="film-media">
                            { this.media() }
                            <MediaForm filmId={ this.props.film.id } />
                        </div>

                        <div className="film-screenings">
                             <Screenings screeningsInfo={ this.props.screeningsInfo } />
                        </div>

                    </div>
                </div>
            </div>
        );
    }

    ratings(rating) {

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

    media() {
        if (this.props.mediaInfo.length) {
            return <AvailableMedia mediaInfo={ this.props.mediaInfo }/>;
        }
        else
            return (
                <div className="text-center">
                    <AddMediaButton expanded={true} />
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
}

export default Film;