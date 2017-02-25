/**
 * released_year
 * Author: Barbara Goss
 * Created: 2017-02-25
 */
import React from 'react';

class ReleasedYear extends React.Component {
    render() {
        return (
            <div className="col">
                <h6>Released</h6>
                <a className="btn btn-sm btn-secondary">
                    { this.props.year }
                </a>
            </div>
        );
    }
}

export default ReleasedYear;