import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { PreviewResumeInterfaces } from '../interfaces';
import { CONSTANTS } from '../constants';

class PreviewResume extends React.Component<PreviewResumeInterfaces> {
    render() {
        return (
            <div id={CONSTANTS.PREVIEW_WRAPPER} style={{ backgroundColor: this.props.templateProperties.bgColor }} className='resume-preview'>
                <div className='p-2' style={{ color: this.props.templateProperties.color, fontSize: this.props.templateProperties.fontSize + 'px', fontFamily: this.props.templateProperties.fontFamily }}>
                    <nav className="navbar navbar-light bg-light d-flex justify-content-between p-2">
                        <a className="navbar-brand" href="#">
                            <img src="https://homepages.cae.wisc.edu/~ece533/images/peppers.png" width="70" height="70" alt="" />
                        </a>
                        <div className='flex-column'>
                            <h4>{this.props.userProfile.firstName} {this.props.userProfile.lastName}</h4>
                            {this.props.userProfile.emailAddress && <div className='d-flex justify-content-center'>
                                Email: {this.props.userProfile.emailAddress}
                            </div>
                            }
                        </div>
                        <div className='d-flex justify-content-end'>
                            <div className="div flex-row">
                                {this.props.userProfile.phoneNumber !== 0 &&
                                    <div>
                                        <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
                                        <label className='m-1'>{this.props.userProfile.phoneNumber}</label>
                                    </div>
                                }
                                <div >
                                    {this.props.userProfile.city !== '' && <div className='m-1'>City: {this.props.userProfile.city}  </div>}
                                    {this.props.userProfile.country !== '' && <div className='m-1'>Country: {this.props.userProfile.country} </div>}
                                    {this.props.userProfile.pinCode !== 0 && <div className='m-1'>PIN: {this.props.userProfile.pinCode} </div>}
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div >
        )
    }
}
export default PreviewResume;