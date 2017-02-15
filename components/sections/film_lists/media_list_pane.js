/**
 *
 * Author: Barbara Goss
 * Created: 2017-02-14
 */
import React from 'react';

import FilmListPagination from './film_list_pagination'
import FilmListFilters from './film_list_filters'

import Table from './film_list_table';
import Header from './film_list_table/header';
import Row from './film_list_table/row';

class MediaListPane extends React.Component {
    constructor() {
        super();

        this.state = {
            filmCount: 0
        }
    }

    render() {
        return (
            <div className={ "tab-pane" + this.props.paneState} id={ this.props.tab.paneId } role="tabpanel">
                <FilmListPagination filmCount={ this.state.filmCount } />
                <FilmListFilters/>

                <Table>
                    <Header headers={ ["Title", "Date", "Media"] } />
                    <tbody>
                    <Row />
                    </tbody>
                </Table>

            </div>
        );
    }
}

export default MediaListPane;