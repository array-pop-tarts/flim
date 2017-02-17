/**
 *
 * Author: Barbara Goss
 * Created: 2017-02-14
 */
import React from 'react';

import Pagination from './pagination'
import Filters from './filters'

import Table from './table';
import Header from './table/header';
import Row from './table/row';

class MediaPane extends React.Component {
    constructor() {
        super();

        this.state = {
            filmCount: 0
        }
    }

    render() {
        return (
            <div className={ "tab-pane" + this.props.paneState} id={ this.props.tab.paneId } role="tabpanel">
                <Pagination filmCount={ this.state.filmCount } />
                <Filters/>

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

export default MediaPane;