import React from 'react';
import SidePanelIcons from '../views/SidePanelIcons';
import SidePanelFields from './SidePanelFields';
import PreviewResume from './previewResume';
import AddItemModal from './addItemModal';
import { addItem, removeItem } from '../utils/handleRemoveItem';

class LeftSideBarOptions extends React.Component {
    state = {
        fromType: 'Profile',
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
        socialNetworksItems: [],
        objective: '',
        objectiveDesc: 'Objective Desc',
        workExperiencesItems: [],
        educationsItems: [],
        projectsItems: [],
        awardsItems: [],
        certificationsItems: [],
        skillsItems: [],
        hobbiesItems: [],
        languagesItems: [],
        isModalOpen: false,
    }
    componentDidMount() {
        this.setState({
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
        // console.log(event.target.name, event.target.value);
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
            case 'Objective Desc':
                this.setState({
                    objectiveDesc: event.target.value
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

    handleAddItemModal = (from: string) => {
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
    hanldeItemsActions = (isAdding: boolean, from: string, index: number) => {
        switch (from) {
            case 'Social Networks':
                const updatedSocialItem = isAdding ? addItem(this.state.socialNetworksItems, 'index') : removeItem(this.state.socialNetworksItems, index)
                this.setState({
                    socialNetworksItems: updatedSocialItem
                });
                break;
            case 'Work Experiences':
                const updatedWorkItem = isAdding ? addItem(this.state.workExperiencesItems, 'index') : removeItem(this.state.workExperiencesItems, index)
                this.setState({
                    workExperiencesItems: updatedWorkItem
                });
                break;
            case 'Educations':
                const updatedEducationItem = isAdding ? addItem(this.state.educationsItems, 'index') : removeItem(this.state.educationsItems, index)
                this.setState({
                    educationsItems: updatedEducationItem
                });
                break;
            case 'Projects':
                const updatedProjectItem = isAdding ? addItem(this.state.projectsItems, 'index') : removeItem(this.state.projectsItems, index)
                this.setState({
                    projectsItems: updatedProjectItem
                });
                break;
            case 'Awards':
                const updatedAwardItem = isAdding ? addItem(this.state.awardsItems, 'index') : removeItem(this.state.awardsItems, index)
                this.setState({
                    awardsItems: updatedAwardItem
                });
                break;
            case 'Certifications':
                const updatedCertsItem = isAdding ? addItem(this.state.certificationsItems, 'index') : removeItem(this.state.certificationsItems, index)
                this.setState({
                    certificationsItems: updatedCertsItem
                });
                break;
            case 'Skills':
                const updatedSkillItem = isAdding ? addItem(this.state.skillsItems, 'index') : removeItem(this.state.skillsItems, index)
                this.setState({
                    skillsItems: updatedSkillItem
                });
                break;
            case 'Hobbies':
                const updatedHobbiesItem = isAdding ? addItem(this.state.hobbiesItems, 'index') : removeItem(this.state.hobbiesItems, index)
                this.setState({
                    hobbiesItems: updatedHobbiesItem
                });
                break;
            case 'Languages':
                const updatedLangItem = isAdding ? addItem(this.state.languagesItems, 'index') : removeItem(this.state.languagesItems, index)
                this.setState({
                    languagesItems: updatedLangItem
                });
                break;
            default:
                break;
        }
        if (isAdding) this.closeAddItemModal();
    }

    handleSetStates = (variable: string, value: any) => {
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
        const itemsToAdd = {
            socialNetworks: this.state.socialNetworksItems,
            workExperiences: this.state.workExperiencesItems,
            educations: this.state.educationsItems,
            projects: this.state.projectsItems,
            awards: this.state.awardsItems,
            certifications: this.state.certificationsItems,
            skills: this.state.skillsItems,
            hobbies: this.state.hobbiesItems,
            languages: this.state.languagesItems
        }
        return (
            <>
                <div className='d-flex flex-row'>
                    <SidePanelIcons />
                    <SidePanelFields handleFieldTypes={this.handleFieldTypes} handleAddItemModal={this.handleAddItemModal} headings={this.state.headings} itemsToAdd={itemsToAdd} hanldeItemsActions={this.hanldeItemsActions} />
                    <PreviewResume templateProperties={this.state.templateProperties} userProfile={userProfile} />
                </div>
                <AddItemModal show={this.state.isModalOpen} onClose={this.closeAddItemModal} fromType={this.state.fromType} hanldeItemsActions={this.hanldeItemsActions} />
            </>
        )
    }
}

export default LeftSideBarOptions;