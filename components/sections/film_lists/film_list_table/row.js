/**
 *
 * Author: Barbara Goss
 * Created: 2017-02-14
 */
import React from 'react';

class Row extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    <a className="" href="#">
                        <div className="film-title">El Laberinto del Fauno</div>
                        <div className="film-translation">Pan's Labyrinth</div>
                    </a>
                </td>
                <td>2008</td>
                <td>2009</td>
                <td>
                    <span className="text-primary">DVD</span>
                </td>
            </tr>
        );
    }
}

export default Row;