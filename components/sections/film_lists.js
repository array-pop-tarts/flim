/**
 *
 * Author: Barbara Goss
 * Created: 2017-02-03
 */
import React from 'react';

import FilmListTab from './film_lists/film_list_tab';

import FilmListPane from './film_lists/film_list_pane';
import ScreeningListPane from './film_lists/screening_list_pane';
import MediaListPane from './film_lists/media_list_pane';

class FilmLists extends React.Component {

    constructor() {
        super();
    }

    render() {

        let tabs = [
            {
                name: "My Films",
                status: "active",
                paneId: "filmsPane",
                component: FilmListPane
            },
            {
                name: "My Screenings",
                status: "",
                paneId: "screeningsPane",
                component: ScreeningListPane
            },
            {
                name: "My Media",
                status: "",
                paneId: "mediaPane",
                component: MediaListPane
            }
        ];

        return (
            <section className="list-tabs">
                <div className="list-tabs card">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs" role="tablist">
                            {
                                tabs.map((tab, i) =>  (
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
                            tabs.map((tab, i) => {
                                console.log(i);
                                let paneState = (i == 0) ? " active" : "";
                                let PaneComponent = tab.component;
                                return (
                                    <PaneComponent tab={ tab }
                                                  i={ i }
                                                  paneState={ paneState }
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default FilmLists;