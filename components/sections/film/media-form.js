/**
 * media-form
 * Author: Barbara Goss
 * Created: 2017-02-20
 */
 
import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

//import 'react-datepicker/dist/react-datepicker.css';

class MediaForm extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <DatePicker selected={ moment() } className="form-control form-control-sm" dateFormat="YYYY-MM-DD" placeholderText="Today" />
                </div>
                <div className="col">
                    <select className="form-control form-control-sm">
                        <option value="">--</option>
                        <option value="DVD">DVD</option>
                        <option value="BluRay">BluRay</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default MediaForm;