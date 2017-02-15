/**
 *
 * Author: Barbara Goss
 * Created: 2017-02-14
 */
import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                {
                    this.props.headers.map(header =>
                        <th>{ header }</th>
                    )
                }
                </tr>
            </thead>
        );
    }
}

export default Header;