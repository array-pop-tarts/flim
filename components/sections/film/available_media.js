/**
 * available_media
 * Author: Barbara Goss
 * Created: 2017-02-20
 */

import React from 'react';

import Medium from './medium';
import AddMediaButton from './add-media-button';

class AvailableMedia extends React.Component
{
    render()
    {
        return (
            <div className="available-media">
                <h6>Media</h6>
                {
                    this.props.media.map((medium) => {
                        return <Medium medium={ medium } key={ medium.key } />
                    })
                }
                <AddMediaButton expanded={false} />
            </div>
        );
    }
}

export default AvailableMedia;