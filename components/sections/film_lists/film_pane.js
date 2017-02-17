/**
 *
 * Author: Barbara Goss
 * Created: 2017-02-08
 */
import React from 'react';

import Pagination from './pagination';
import Filters from './filters';
import Form from './form';

import Table from './table';
import Header from './table/header';
import Row from './table/row';

class FilmPane extends React.Component {

    constructor() {
        super();

        this.state = {
            films: [{
                title: "El Laberinto del Fauno",
                translation: "",
                releasedYear: 2003,
                firstScreened: 2004,
                created: "2017-02-16",
                rating: 10,
                screenings: [],
                media: []
            }]
        };

        this.contentsIfFilms = this.contentsIfFilms.bind(this);
    }

    render() {

        return (
            <div className={ "tab-pane" + this.props.paneState} id={ this.props.tab.paneId } role="tabpanel">
                { this.state.films.length ?
                    this.contentsIfFilms()
                : (
                    <p>No results</p>
                )}
            </div>
        );
    }

    contentsIfFilms() {
        let formId = "filmForm_" + this.props.tab.paneId;

        const columns = [
            {name: "Title", width: 12},
            {name: "Released", width: 3},
            {name: "Screened", width: 3},
            {name: "Media", width: 6}
        ];
        let headers = [];
        columns.map((column) => {headers.push(column.name)});

        return (
            <div>
                <div className="row">
                    <div className="col-8">
                        <Pagination filmCount={ this.state.films.length } />
                    </div>
                    <div className="col-8">
                        <Filters/>
                    </div>
                    <div className="col-8">
                        <button className="btn btn-success" type="button" data-toggle="collapse" data-target={ "#" + formId } aria-controls={ formId } aria-expanded="false" aria-label="Toggle form for new films">
                            NEW
                        </button>
                    </div>
                </div>
                <Form id={ formId } />
                <Table>
                    <Header headers={ headers } />
                    <tbody>
                    { this.state.films.map((film) => {
                        return (
                            <Row title={ film.title }
                                 translation={ film.translation }
                                 released={ film.releasedYear }
                                 screened={ film.firstScreened }
                                 media={ film.media }
                                 cells={  }
                            />
                        );
                    })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default FilmPane;
