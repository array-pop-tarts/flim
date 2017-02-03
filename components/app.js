/**
 *
 * Author: Barbara Goss
 * Created: 2017-02-02
 */
import React from 'react';

import Header from './layout/header';
import FilmLists from './sections/film_lists';
import FilmForm from './sections/film_form';

class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="container-fluid">
                <Header/>
                <FilmForm/>
                <FilmLists/>
            </div>
        );
    }

}

export default App;