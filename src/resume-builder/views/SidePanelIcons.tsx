import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faGlobe, faGamepad, faSchool, faStickyNote, faSuitcase, faProjectDiagram, faAward, faCertificate, faSkiing, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { CONSTANTS } from '../constants';
// import { SidePanelIconsInterfaces } from '../interfaces';

class SidePanelIcons extends React.Component {
    state = {
        isProfile: false,
        isSocialNetwork: false,
        isObjective: false,
        isWorkExperience: false,
        isEducation: false,
        isProjects: false,
        isAwards: false,
        isCertifications: false,
        isSkills: false,
        isHobbies: false,
        isLanguages: false,
    }
    componentDidMount() {
        this.setState({
            isProfile: true,
            isSocialNetwork: true,
            isObjective: true,
            isWorkExperience: true,
            isEducation: true,
            isProjects: true,
            isAwards: true,
            isCertifications: true,
            isSkills: true,
            isHobbies: true,
            isLanguages: true,
        })
    }
    render() {
        return (
            <div id={CONSTANTS.RESUME_BUILDER_SIDE_PANEL_ICONS} className='d-flex flex-column m-2'>
                <a id={CONSTANTS.PROFILE} className='m-1' href={'#' + CONSTANTS.FIELD_USER_PROFILE}>
                    {this.state.isProfile && (<FontAwesomeIcon className='m-2' icon={faUserAlt} color='#2c785c' />)}
                </a>
                <a id={CONSTANTS.SOCIAL_NETWORKS} className='m-1' href={'#' + CONSTANTS.FIELD_SOCIAL_NETWORKS}>
                    {this.state.isSocialNetwork && (<FontAwesomeIcon className='m-2' icon={faGlobe} color='#2c785c' />)}
                </a>
                <a id={CONSTANTS.OBJECTIVE} className='m-1' href={'#' + CONSTANTS.FIELD_OBJECTIVE}>
                    {this.state.isObjective && (<FontAwesomeIcon className='m-2' icon={faStickyNote} color='#2c785c' />)}
                </a>
                <a id={CONSTANTS.WORK_EXPERIENCES} className='m-1' href={'#' + CONSTANTS.FIELD_WORK_EXPERIENCES}>
                    {this.state.isWorkExperience && (<FontAwesomeIcon className='m-2' icon={faSuitcase} color='#2c785c' />)}
                </a>
                <a id={CONSTANTS.EDUCATION} className='m-1' href={'#' + CONSTANTS.FIELD_EDUCATION}>
                    {this.state.isEducation && (<FontAwesomeIcon className='m-2' icon={faSchool} color='#2c785c' />)}
                </a>
                <a id={CONSTANTS.PROJECTS} className='m-1' href={'#' + CONSTANTS.FIELD_PROJECTS}>
                    {this.state.isProjects && (<FontAwesomeIcon className='m-2' icon={faProjectDiagram} color='#2c785c' />)}
                </a>
                <a id={CONSTANTS.AWARDS} className='m-1' href={'#' + CONSTANTS.FIELD_AWARDS}>
                    {this.state.isAwards && (<FontAwesomeIcon className='m-2' icon={faAward} color='#2c785c' />)}
                </a>
                <a id={CONSTANTS.CERTIFICATIONS} className='m-1' href={'#' + CONSTANTS.FIELD_CERTIFICATIONS}>
                    {this.state.isCertifications && (<FontAwesomeIcon className='m-2' icon={faCertificate} color='#2c785c' />)}
                </a>
                <a id={CONSTANTS.SKILLS} className='m-1' href={'#' + CONSTANTS.FIELD_SKILLS}>
                    {this.state.isSkills && (<FontAwesomeIcon className='m-2' icon={faSkiing} color='#2c785c' />)}
                </a>
                <a id={CONSTANTS.HOBBIES} className='m-1' href={'#' + CONSTANTS.FIELD_HOBBIES}>
                    {this.state.isHobbies && (<FontAwesomeIcon className='m-2' icon={faGamepad} color='#2c785c' />)}
                </a>
                <a id={CONSTANTS.LANGUAGES} className='m-1' href={'#' + CONSTANTS.FIELD_LANGUAGES}>
                    {this.state.isLanguages && (<FontAwesomeIcon className='m-2' icon={faLanguage} color='#2c785c' />)}
                </a>
            </div>
        )
    }
}

export default SidePanelIcons;