import React from 'react';
import { PreviewResumeInterfaces } from '../interfaces';
import { CONSTANTS } from '../constants';

class PreviewResume extends React.Component<PreviewResumeInterfaces> {
    render() {
        console.log(this.props.templateProperties.fontSize);

        return (
            <div className='d-flex flex-fill resume-preview rounded'>
                <div id={CONSTANTS.PREVIEW_WRAPPER} style={{ backgroundColor: this.props.templateProperties.bgColor }}>
                    <div className='p-2' style={{ color: this.props.templateProperties.color, fontSize: this.props.templateProperties.fontSize + 'px', fontFamily: this.props.templateProperties.fontFamily }}>
                        <p style={{ color: this.props.templateProperties.color !== '' ? this.props.templateProperties.color : 'black' }}>
                            resumeTitle: {this.props.userProfile.resumeTitle},
                            firstName: {this.props.userProfile.firstName},
                            lastName: {this.props.userProfile.lastName},
                            address: {this.props.userProfile.address},
                            city: {this.props.userProfile.city},
                            country: {this.props.userProfile.country},
                            pinCode: {this.props.userProfile.pinCode},
                            phoneNumber: {this.props.userProfile.phoneNumber},
                            emailAddress: {this.props.userProfile.emailAddress}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default PreviewResume;