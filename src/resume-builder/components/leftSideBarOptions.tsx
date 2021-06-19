import React from 'react';
import SidePanelIcons from '../views/SidePanelIcons';
import SidePanelFields from './SidePanelFields';
import PreviewResume from './previewResume';
import AddItemModal from './addItemModal';

class LeftSideBarOptions extends React.Component {
    state = {
        fromType: 'Profile',
        headings: {},
        templateProperties: {},
        resumeTitle: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        country: '',
        pinCode: 0,
        phoneNumber: 0,
        emailAddress: '',
        socialNetworks: [],
        objective: '',
        workExperiences: [],
        educations: [],
        projects: [],
        awards: [],
        certifications: [],
        skills: [],
        hobbies: [],
        languages: [],
        isModalOpen: false
    }
    componentDidMount() {
        this.setState({
            headings: {
                socialNetworks: 'Social Networks',
                objective: 'Objective',
                workExperiences: 'Work Experiences',
                educations: 'Educations',
                projects: 'Projects',
                awards: 'Awards',
                certifications: 'Certifications',
                skills: 'Skills',
                hobbies: 'Hobbies',
                languages: 'Languages',
            },
            templateProperties: {
                color: '#000',
                fontFamily: 'monospace',
                themeColor: 'violet',
                fontSize: '10px',
                headingColor: 'red'
            }
        })
    }
    handleFieldTypes = (type: string, event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.name, event.target.value);
        switch (type) {
            case 'resumeTitle':
                this.setState({
                    resumeTitle: event.target.value
                });
                break;
            case 'firstName':
                this.setState({
                    firstName: event.target.value
                });
                break;
            case 'lastName':
                this.setState({
                    lastName: event.target.value
                });
                break;
            case 'address':
                this.setState({
                    address: event.target.value
                });
                break;
            case 'city':
                this.setState({
                    city: event.target.value
                });
                break;
            case 'country':
                this.setState({
                    country: event.target.value
                });
                break;
            case 'pinCode':
                this.setState({
                    pinCode: event.target.value
                });
                break;
            case 'phoneNumber':
                this.setState({
                    phoneNumber: event.target.value
                });
                break;
            case 'emailAddress':
                this.setState({
                    emailAddress: event.target.value
                });
                break;
            case 'Social Networks':
                this.setState({
                    headings: Object.assign(
                        {},
                        this.state.headings,
                        { ['socialNetworks']: event.target.value }
                    ),
                });
                break;
            case 'Objective':
                this.setState({
                    headings: Object.assign(
                        {},
                        this.state.headings,
                        { ['objective']: event.target.value }
                    ),
                });
                break;
            case 'Work Experiences':
                this.setState({
                    headings: Object.assign(
                        {},
                        this.state.headings,
                        { ['workExperiences']: event.target.value }
                    ),
                });
                break;
            case 'Educations':
                this.setState({
                    headings: Object.assign(
                        {},
                        this.state.headings,
                        { ['educations']: event.target.value }
                    ),
                });
                break;
            case 'Projects':
                this.setState({
                    headings: Object.assign(
                        {},
                        this.state.headings,
                        { ['projects']: event.target.value }
                    ),
                });
                break;
            case 'Awards':
                this.setState({
                    headings: Object.assign(
                        {},
                        this.state.headings,
                        { ['awards']: event.target.value }
                    ),
                });
                break;
            case 'Certifications':
                this.setState({
                    headings: Object.assign(
                        {},
                        this.state.headings,
                        { ['certifications']: event.target.value }
                    ),
                });
                break;
            case 'Skills':
                this.setState({
                    headings: Object.assign(
                        {},
                        this.state.headings,
                        { ['skills']: event.target.value }
                    ),
                });
                break;
            case 'Hobbies':
                this.setState({
                    headings: Object.assign(
                        {},
                        this.state.headings,
                        { ['hobbies']: event.target.value }
                    ),
                });
                break;
            case 'Languages':
                this.setState({
                    headings: Object.assign(
                        {},
                        this.state.headings,
                        { ['languages']: event.target.value }
                    ),
                });
                break;
            default:
                break;
        }
    }

    handleAddDetails = (from: string) => {
        this.setState({
            isModalOpen: true,
            fromType: from
        });
    }

    closeAddItemModal = () => {
        this.setState({
            isModalOpen: false
        });
    }

    render() {
        const userProfile = {
            resumeTitle: this.state.resumeTitle,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            city: this.state.city,
            country: this.state.country,
            pinCode: this.state.pinCode,
            phoneNumber: this.state.phoneNumber,
            emailAddress: this.state.emailAddress,
        }
        return (
            <>
                <div className='d-flex flex-row'>
                    <SidePanelIcons />
                    <SidePanelFields handleFieldTypes={this.handleFieldTypes} handleAddDetails={this.handleAddDetails} headings={this.state.headings} />
                    <PreviewResume templateProperties={this.state.templateProperties} userProfile={userProfile} />
                </div>
                <AddItemModal show={this.state.isModalOpen} onClose={this.closeAddItemModal} fromType={this.state.fromType} />
            </>
        )
    }
}

export default LeftSideBarOptions;