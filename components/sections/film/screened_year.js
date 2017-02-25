/**
 * screened_year
 * Author: Barbara Goss
 * Created: 2017-02-25
 */
import React from 'react';

import AddScreeningButton from './add-screening-button';

class ScreenedYear extends React.Component {
    render() {
        return (
            <div className="col">
                <h6>Screened</h6>
                <a className="btn btn-sm btn-secondary">
                    { this.props.year }
                </a>
                <AddScreeningButton expanded={ false } />
            </div>
        );
    }
}

export default ScreenedYear;