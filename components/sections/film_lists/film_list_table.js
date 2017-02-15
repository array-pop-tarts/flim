/**
 *
 * Author: Barbara Goss
 * Created: 2017-02-14
 */

import React from 'react';

class FilmListTable extends React.Component {

    render() {
        return (
            <table className="table">
                { this.props.children }
            </table>
        );
    }

}

export default FilmListTable;