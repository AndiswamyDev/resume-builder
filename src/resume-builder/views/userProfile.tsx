import React from 'react';
import { InputGroup, FormControl, Col, Row } from 'react-bootstrap';
import { CONSTANTS } from '../constants';
import { UserProfileInterfaces } from '../interfaces';

class UserProfile extends React.Component<UserProfileInterfaces>{
    render() {
        return (
            <div id={this.props.fromType} className='side-panel-user-profile p-2 mb-5 rounded'>
                <h5 className='d-flex justify-content-center p-2'>Build Resume</h5>
                <small>Heading</small>
                <InputGroup id={CONSTANTS.RESUME_NAME} className="mb-3" size='sm'>
                    <FormControl onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.props.handleFieldTypes('resumeTitle', event)}
                        autoComplete='off'
                    />
                </InputGroup >
                <hr />
                <Row>
                    <Col>
                        <small>First Name</small>
                        <InputGroup className="mb-3" size='sm'>
                            <FormControl onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.props.handleFieldTypes('firstName', event)}
                                autoComplete='off'
                            />
                        </InputGroup >
                    </Col>
                    <Col>
                        <small>Last Name</small>
                        <InputGroup className="mb-3" size='sm'>
                            <FormControl onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.props.handleFieldTypes('lastName', event)}
                                autoComplete='off'
                            />
                        </InputGroup >
                    </Col>
                </Row>
                <hr />
                <small>Date of Birth</small>
                <input type='date' onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.props.handleFieldTypes('dob', event)}
                    autoComplete='off' />
                <hr />
                <small>Address</small>
                <InputGroup className="mb-3" size='sm'>
                    <FormControl onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.props.handleFieldTypes('address', event)}
                        autoComplete='off'
                    />
                </InputGroup >
                <hr />
                <Row>
                    <Col>
                        <small>City</small>
                        <InputGroup className="mb-3" size='sm'>
                            <FormControl onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.props.handleFieldTypes('city', event)}
                                autoComplete='off'
                            />
                        </InputGroup >
                    </Col>
                    <Col>
                        <small>Country</small>
                        <InputGroup className="mb-3" size='sm'>
                            <FormControl onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.props.handleFieldTypes('country', event)}
                                autoComplete='off'
                            />
                        </InputGroup >
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <small>Pin Code</small>
                        <InputGroup className="mb-3" size='sm'>
                            <FormControl type='number' onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.props.handleFieldTypes('pinCode', event)}
                                autoComplete='off'
                            />
                        </InputGroup >
                    </Col>
                    <Col>
                        <small>Contact No</small>
                        <InputGroup className="mb-3" size='sm'>
                            <FormControl type='number' onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.props.handleFieldTypes('phoneNumber', event)}
                                autoComplete='off'
                            />
                        </InputGroup >
                    </Col>
                </Row>
                <hr />
                <small>Email Address</small>
                <InputGroup className="mb-3" size='sm'>
                    <FormControl onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.props.handleFieldTypes('emailAddress', event)}
                        autoComplete='off'
                    />
                </InputGroup >
            </div>
        )
    }
}

export default UserProfile;