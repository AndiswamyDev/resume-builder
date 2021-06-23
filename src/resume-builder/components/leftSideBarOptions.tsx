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
        templateProperties: {
            color: '#000',
            fontFamily: 'monospace',
            themeColor: 'violet',
            fontSize: '10px',
            headingColor: 'red'
        },
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
    handleFieldTypes = (type: string, event: React.ChangeEvent<HTMLInputElement>) => {
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
            case this.state.headings.socialNetworks:
                this.setState({
                    headings: Object.assign(
                        {},
                        this.state.headings,
                        { ['socialNetworks']: event.target.value }
                    ),
                });
                break;
            case this.state.headings.objective:
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
            case this.state.headings.workExperiences:
                this.setState({
                    headings: Object.assign(
                        {},
                        this.state.headings,
                        { ['workExperiences']: event.target.value }
                    ),
                });
                break;
            case this.state.headings.educations:
                this.setState({
                    headings: Object.assign(
                        {},
                        this.state.headings,
                        { ['educations']: event.target.value }
                    ),
                });
                break;
            case this.state.headings.projects:
                this.setState({
                    headings: Object.assign(
                        {},
                        this.state.headings,
                        { ['projects']: event.target.value }
                    ),
                });
                break;
            case this.state.headings.awards:
                this.setState({
                    headings: Object.assign(
                        {},
                        this.state.headings,
                        { ['awards']: event.target.value }
                    ),
                });
                break;
            case this.state.headings.certifications:
                this.setState({
                    headings: Object.assign(
                        {},
                        this.state.headings,
                        { ['certifications']: event.target.value }
                    ),
                });
                break;
            case this.state.headings.skills:
                this.setState({
                    headings: Object.assign(
                        {},
                        this.state.headings,
                        { ['skills']: event.target.value }
                    ),
                });
                break;
            case this.state.headings.hobbies:
                this.setState({
                    headings: Object.assign(
                        {},
                        this.state.headings,
                        { ['hobbies']: event.target.value }
                    ),
                });
                break;
            case this.state.headings.languages:
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
            case this.state.headings.socialNetworks:
                const updatedSocialItem = isAdding ? addItem(this.state.socialNetworksItems, 'My Item') : removeItem(this.state.socialNetworksItems, index)
                this.setState({
                    socialNetworksItems: updatedSocialItem
                });
                break;
            case this.state.headings.workExperiences:
                const updatedWorkItem = isAdding ? addItem(this.state.workExperiencesItems, 'My Item') : removeItem(this.state.workExperiencesItems, index)
                this.setState({
                    workExperiencesItems: updatedWorkItem
                });
                break;
            case this.state.headings.educations:
                const updatedEducationItem = isAdding ? addItem(this.state.educationsItems, 'My Item') : removeItem(this.state.educationsItems, index)
                this.setState({
                    educationsItems: updatedEducationItem
                });
                break;
            case this.state.headings.projects:
                const updatedProjectItem = isAdding ? addItem(this.state.projectsItems, 'My Item') : removeItem(this.state.projectsItems, index)
                this.setState({
                    projectsItems: updatedProjectItem
                });
                break;
            case this.state.headings.awards:
                const updatedAwardItem = isAdding ? addItem(this.state.awardsItems, 'My Item') : removeItem(this.state.awardsItems, index)
                this.setState({
                    awardsItems: updatedAwardItem
                });
                break;
            case this.state.headings.certifications:
                const updatedCertsItem = isAdding ? addItem(this.state.certificationsItems, 'My Item') : removeItem(this.state.certificationsItems, index)
                this.setState({
                    certificationsItems: updatedCertsItem
                });
                break;
            case this.state.headings.skills:
                const updatedSkillItem = isAdding ? addItem(this.state.skillsItems, 'My Item') : removeItem(this.state.skillsItems, index)
                this.setState({
                    skillsItems: updatedSkillItem
                });
                break;
            case this.state.headings.hobbies:
                const updatedHobbiesItem = isAdding ? addItem(this.state.hobbiesItems, 'My Item') : removeItem(this.state.hobbiesItems, index)
                this.setState({
                    hobbiesItems: updatedHobbiesItem
                });
                break;
            case this.state.headings.languages:
                const updatedLangItem = isAdding ? addItem(this.state.languagesItems, 'My Item') : removeItem(this.state.languagesItems, index)
                this.setState({
                    languagesItems: updatedLangItem
                });
                break;
            default:
                break;
        }
        if (isAdding) this.closeAddItemModal();
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
                <div className='d-flex flex-row m-0'>
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