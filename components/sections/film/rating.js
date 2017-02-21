/**
 *
 * Author: Barbara Goss
 * Created: 2017-02-20
 */
import React from 'react';

class Rating extends React.Component {
    render() {
        let selectedClass = (this.props.selected) ? "" : "-o";
        return (
            <button className="btn btn-sm btn-secondary" onClick={ (e) => this.props.changeRating(this.props.index) }>
                <i className={ "fa fa-circle" + selectedClass }></i>
            </button>
        );
    }
}
export default Rating;