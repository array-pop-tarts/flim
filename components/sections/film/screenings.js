/**
 * screenings
 * Author: Barbara Goss
 * Created: 2017-02-20
 */
import React from 'react';

import Screening from './screening';

class Screenings extends React.Component {
    render() {
        return (
            <ul className="list-group">
                {
                    Object.keys(this.props.screenings).map((screening) => {
                        return <Screening screening={ screening } key={ screening } />
                    })
                }
            </ul>
        );
    }
}

export default Screenings;