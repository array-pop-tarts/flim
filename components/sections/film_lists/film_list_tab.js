/**
 *
 * Author: Barbara Goss
 * Created: 2017-02-03
 */
import React from 'react';
import Link from 'react-router';

class FilmListTab extends React.Component {

    render() {
        return (
            <li className="nav-item">
                <a href="#" className={ "nav-link" + " " + this.props.status }>{ this.props.name }</a>
            </li>
        );
    }

}

export default FilmListTab;