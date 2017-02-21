/**
 * screening
 * Author: Barbara Goss
 * Created: 2017-02-20
 */
import React from 'react';

class Screening extends React.Component {
    render() {

        return (
            <li className="list-group-item  justify-content-between">
                <div>
                    2004-03-19 @ Royal Cinema
                </div>
                <button className="btn btn-sm btn-outline-secondary">
                    <i className="fa fa-cog"></i>
                </button>
                <div className="screening-friends">
                    Evan, Richard
                </div>
            </li>
        );
    }
}

export default Screening;