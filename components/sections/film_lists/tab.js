/**
 *
 * Author: Barbara Goss
 * Created: 2017-02-03
 */
import React from 'react';
import Link from 'react-router';

class Tab extends React.Component {

    render() {
        return (
            <li className="nav-item">
                <a href={ "#" + this.props.paneId } className={ "nav-link" + " " + this.props.status } data-toggle="tab" role="tab">
                    { this.props.name }
                </a>
            </li>
        );
    }

}

export default Tab;