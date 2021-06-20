import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faDownload, faPalette, faFont, faTextHeight, faDonate } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Container } from 'react-bootstrap';
import { CONSTANTS } from '../constants';

class BuilderNavBar extends React.Component {
    render() {
        return (
            <div className='d-flex justify-content-between m-1'>
                <div>
                    <span className='text-primary m-3'>RB</span>
                </div>
                <div>
                </div>
                <div id={CONSTANTS.TOOLBAR_WRAPPER} className='d-flex flex-row'>
                    <a id={CONSTANTS.TEMPLATES}>
                        <FontAwesomeIcon className='m-2' icon={faFolder} color='#2c785c' />
                    </a>
                    <a id={CONSTANTS.COLOURS}>
                        <FontAwesomeIcon className='m-2' icon={faPalette} color='#2c785c' />
                    </a>
                    <a id={CONSTANTS.FONT_SIZE}>
                        <FontAwesomeIcon className='m-2' icon={faTextHeight} color='#2c785c' />
                    </a>
                    <a id={CONSTANTS.FONT_FAMILY}>
                        <FontAwesomeIcon className='m-2' icon={faFont} color='#2c785c' />
                    </a>
                    <a id={CONSTANTS.DOWNLOAD}>
                        <FontAwesomeIcon className='m-2' icon={faDownload} color='#2c785c' />
                    </a>
                    {/* <FontAwesomeIcon className='m-2' icon={faDonate} color='#2c785c' /> */}
                </div>
            </div>
        )
    }
}

export default BuilderNavBar;