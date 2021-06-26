import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faDownload, faPalette, faFont, faTextHeight } from '@fortawesome/free-solid-svg-icons';
import { BuilderNavBarInterfaces } from '../interfaces';
import { CONSTANTS } from '../constants';

class BuilderNavBar extends React.Component<BuilderNavBarInterfaces>{
    render() {
        return (
            <div className='d-flex justify-content-between m-1'>
                <div>
                    <span className='text-primary m-3'>RB</span>
                </div>
                <div id={CONSTANTS.TOOLBAR_WRAPPER} className='d-flex flex-row'>
                    <span id={CONSTANTS.TEMPLATES} onClick={() => this.props.handleToolbarOptions('templates')}>
                        <FontAwesomeIcon className='m-2' icon={faFolder} color='#2c785c' />
                    </span>
                    <span id={CONSTANTS.COLOURS} onClick={() => this.props.handleToolbarOptions('color')}>
                        <FontAwesomeIcon className='m-2' icon={faPalette} color='#2c785c' />
                    </span>
                    <span id={CONSTANTS.FONT_SIZE} onClick={() => this.props.handleToolbarOptions('size')}>
                        <FontAwesomeIcon className='m-2' icon={faTextHeight} color='#2c785c' />
                    </span>
                    <span id={CONSTANTS.FONT_FAMILY} onClick={() => this.props.handleToolbarOptions('family')}>
                        <FontAwesomeIcon className='m-2' icon={faFont} color='#2c785c' />
                    </span>
                    <span id={CONSTANTS.DOWNLOAD}>
                        <FontAwesomeIcon className='m-2' icon={faDownload} color='#2c785c' />
                    </span>
                    {/* <FontAwesomeIcon className='m-2' icon={faDonate} color='#2c785c' /> */}
                </div>
            </div>
        )
    }
}

export default BuilderNavBar;