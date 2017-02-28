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
            <div>
                <h6>Media</h6>
                {
                    this.props.mediaInfo.map((medium) => {
                        return <Medium medium={ medium } key={ medium.key } />
                    })
                }
            </div>
        );
    }
}

export default AvailableMedia;