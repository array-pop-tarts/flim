/**
 *
 * Author: Barbara Goss
 * Created: 2017-02-03
 */

import React from 'react';
import Link from 'react-router';

class Filters extends React.Component {

    render() {
        return (
            <div id="filters">
                <form className="filter-form form-inline" action="" method="get">
                    <div className="row">
                        <div className="col-sm-24 col-md-16">
                            <div className="input-group has-success">
                                <label for="filterTitle" className="sr-only">Filter Films by Title</label>
                                <input id="filterTitle" name="" className="form-control" type="text" placeholder="Title" />

                                <span className="input-group-addon">from</span>
                                <label for="filterReleasedFrom" className="sr-only">Filter Films by Year of Release</label>
                                <input id="filterReleasedFrom" name="" className="form-control" type="text" placeholder="1888" />

                                <span className="input-group-addon">to</span>
                                <label for="filterReleasedTo" className="sr-only">Filter Films by Year of Release</label>
                                <input id="filterReleasedTo" name="" className="form-control" type="text" placeholder="This Year" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

}

export default Filters;