/**
 *
 * Author: Barbara Goss
 * Created: 2017-02-02
 */
import React from 'react';

import Header from './layout/header';
import FilmLists from './sections/film_lists';

class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="container-fluid">
                <Header/>
                <FilmLists/>
            </div>
        );
    }

}

export default App;