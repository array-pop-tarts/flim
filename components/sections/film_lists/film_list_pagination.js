/**
 *
 * Author: Barbara Goss
 * Created: 2017-02-03
 */
import React from 'react';
import Link from 'react-router';

class FilmListPagination extends React.Component {

    render() {
        return (
            <div className="paginating">
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a href="#">Previous</a>
                    </li>
                    <li className="list-inline-item">
                        Showing 11-20 of { this.props.filmCount }
                    </li>
                    <li className="list-inline-item">
                        <a href="#">Next</a>
                    </li>
                </ul>
            </div>
        );
    }

}

export default FilmListPagination;