/**
 *
 * Author: Barbara Goss
 * Created: 2017-02-03
 */
import React from 'react';

import Tab from './film_lists/tab';

import FilmPane from './film_lists/film_pane';
import ScreeningPane from './film_lists/screening_pane';
import MediaPane from './film_lists/media_pane';

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
                component: FilmPane
            },
            {
                name: "My Screenings",
                status: "",
                paneId: "screeningsPane",
                component: ScreeningPane
            },
            {
                name: "My Media",
                status: "",
                paneId: "mediaPane",
                component: MediaPane
            }
        ];

        return (
            <section className="list-tabs">
                <div className="list-tabs card">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs" role="tablist">
                            {
                                tabs.map((tab, i) =>  (
                                    <Tab
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