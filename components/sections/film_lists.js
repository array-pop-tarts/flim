/**
 *
 * Author: Barbara Goss
 * Created: 2017-02-03
 */
import React from 'react';

import FilmListTab from './film_lists/film_list_tab'
import FilmListPagination from './film_lists/film_list_pagination'
import FilmListFilters from './film_lists/film_list_filters'

class FilmLists extends React.Component {

    constructor() {
        super();
        this.state = {
            tabs: [
                {
                    name: "My Films",
                    status: "active",
                    paneId: "filmsPane"
                },
                {
                    name: "My Screenings",
                    status: "",
                    paneId: "screeningsPane"
                },
                {
                    name: "My Media",
                    status: "",
                    paneId: "mediaPane"
                }
            ]
        }
    }

    render() {
        return (
            <section className="list-tabs">
                <div className="list-tabs card">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs" role="tablist">
                            {
                                this.state.tabs.map((tab, i) =>  (
                                    <FilmListTab
                                        name={ tab.name }
                                        status={ tab.status }
                                        paneId={ tab.paneId }
                                    />
                                ))
                            }
                        </ul>
                    </div>

                    <div className="card-block tab-content">
                        {
                            this.state.tabs.map((tab, i) =>  (
                                <div className="tab-pane active" id={ tab.paneId } role="tabpanel">
                                    { tab.name }
                                </div>
                            ))
                        }
                    </div>

                </div>

                <FilmListPagination/>
                <FilmListFilters/>

                <div id="filmList">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Released</th>
                            <th>Screened</th>
                            <th>Media</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <a className="film-title" href="#">
                                    <span className="title">Grosse Pointe Blank</span>
                                    <span className="translation"></span>
                                </a>
                            </td>
                            <td>1997</td>
                            <td>2001</td>
                            <td>
                                <span className="text-primary">DVD</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a className="" href="#">
                                    <div className="film-title">El Laberinto del Fauno</div>
                                    <div className="film-translation">Pan's Labyrinth</div>
                                </a>
                            </td>
                            <td>2008</td>
                            <td>2009</td>
                            <td>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }

}

export default FilmLists;