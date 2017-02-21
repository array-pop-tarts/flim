/**
 *
 * Author: Barbara Goss
 * Created: 2017-02-20
 */
import React from 'react';

import Rating from './film/rating';
import AvailableMedia from './film/available_media';
import AddMediaButton from './film/add-media-button';
import MediaForm from './film/media-form';
import Screenings from './film/screenings';

class Film extends React.Component {

    constructor() {
        super();

        this.ratings = this.ratings.bind(this);
        this.media = this.media.bind(this);
    }

    render() {

        let film = this.props.film;

        let ratedClass = (film.rating) ? "" : "unrated";

        return (
            <div className="card film-card">

                <div className="card-header">
                    <h3>{ film.title }</h3>
                    <h4>{ film.translation }</h4>
                    <div className={ "h6 " + ratedClass }>
                        { this.ratings() }
                    </div>
                </div>

                <div className="card-block">

                    <div className="row text-center film-years">
                        <div className="col">
                            <div className="row">
                                <div className="col"><h6>Released</h6></div>
                                <div className="col">
                                    <a className="btn btn-sm btn-secondary">
                                        { film.released }
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col"><h6>Screened</h6></div>
                                <div className="col">
                                    <a className="btn btn-sm btn-secondary">
                                        { film.screened }
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="film-media">
                        { this.media() }
                    </div>

                    <div className="film-screenings">
                        {
                            film.screenings !== undefined &&
                                <Screenings screenings={ film.screenings } />
                        }
                    </div>

                </div>
            </div>
        );
    }

    ratings() {
        let rating = this.props.film.rating;
        if (!rating)
            rating = 0;

        let ratingLinks = [];
        for (let i = 1; i <= rating; i++) {
            ratingLinks.push(<Rating selected={true} key={i} />);
        }
        if (rating < 10) {
            for (let j = rating + 1; j <= 10; j++) {
                ratingLinks.push(<Rating selected={false} key={j} />);
            }
        }
        return ratingLinks;
    }

    media() {
        if (this.props.film.media !== undefined) {
            return <AvailableMedia media={ this.props.film.media }/>;
        }
        else
            return (
                <div className="text-center">
                    <AddMediaButton expanded={true} />
                </div>
            );
    }
}

export default Film;