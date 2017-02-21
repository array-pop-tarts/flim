/**
 *
 * Author: Barbara Goss
 * Created: 2017-02-20
 */
import React from 'react';
import firebase from 'firebase';

import Film from './film';

class Films extends React.Component {

    constructor() {
        super();

        this.state = {
            films: []
        };
    }

    render() {
        return (
            <div className="row">
                {this.state.films.map((film) => {
                    return (
                        <Film film={ film } key={ film.id } />
                    );
                })}
            </div>
        );
    }

    componentDidMount() {
        let fireFilms = firebase.database().ref('films');

        fireFilms.on('child_added', (snapshot) => {
            const film = snapshot.val();
            film.id = snapshot.key;

            this.setState({
                films: [...this.state.films, film]
            });
        });

        fireFilms.on('child_changed', (snapshot) => {
            const films = this.state.films.map(film => {
                if (film.id !== snapshot.key)
                    return film;
                else
                    return snapshot.val();
            });

            this.setState({films: films});
        });

    }
}

export default Films;