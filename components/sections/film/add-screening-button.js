/**
 * add-screening-button
 * Author: Barbara Goss
 * Created: 2017-02-25
 */
import React from 'react';

class AddScreeningButton extends React.Component {
    render() {
        return (
            <button className="btn btn-outline-warning btn-sm"
                    aria-label="Add More Screenings for this Film"
                    onClick={ this.props.onToggleForm() }
            >
                <i className="fa fa-plus"></i>
                { (this.props.expanded) ? " Add Screening" : "" }
            </button>
        );
    }
}

export default AddScreeningButton;