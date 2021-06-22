import React from "react";
import FieldToFill from "./fieldToFill";
import UserProfile from "../views/userProfile";
import { SideBarFieldsInterfaces } from '../interfaces';
import { CONSTANTS } from '../constants';

class SidePanelFields extends React.Component<SideBarFieldsInterfaces>{
    render() {
        return (
            <div className='side-panel-fields' >
                <div className='side-panel-scroll'>
                    <UserProfile fromType={CONSTANTS.FIELD_USER_PROFILE} handleFieldTypes={this.props.handleFieldTypes} />
                    <FieldToFill fromType={CONSTANTS.FIELD_SOCIAL_NETWORKS} handleFieldTypes={this.props.handleFieldTypes} handleAddDetails={this.props.handleAddDetails} headings={this.props.headings.socialNetworks} />
                    <FieldToFill fromType={CONSTANTS.FIELD_OBJECTIVE} handleFieldTypes={this.props.handleFieldTypes} handleAddDetails={this.props.handleAddDetails} headings={this.props.headings.objective} />
                    <FieldToFill fromType={CONSTANTS.FIELD_WORK_EXPERIENCES} handleFieldTypes={this.props.handleFieldTypes} handleAddDetails={this.props.handleAddDetails} headings={this.props.headings.workExperience} />
                    <FieldToFill fromType={CONSTANTS.FIELD_EDUCATION} handleFieldTypes={this.props.handleFieldTypes} handleAddDetails={this.props.handleAddDetails} headings={this.props.headings.educations} />
                    <FieldToFill fromType={CONSTANTS.FIELD_PROJECTS} handleFieldTypes={this.props.handleFieldTypes} handleAddDetails={this.props.handleAddDetails} headings={this.props.headings.projects} />
                    <FieldToFill fromType={CONSTANTS.FIELD_AWARDS} handleFieldTypes={this.props.handleFieldTypes} handleAddDetails={this.props.handleAddDetails} headings={this.props.headings.awards} />
                    <FieldToFill fromType={CONSTANTS.FIELD_CERTIFICATIONS} handleFieldTypes={this.props.handleFieldTypes} handleAddDetails={this.props.handleAddDetails} headings={this.props.headings.certifications} />
                    <FieldToFill fromType={CONSTANTS.FIELD_SKILLS} handleFieldTypes={this.props.handleFieldTypes} handleAddDetails={this.props.handleAddDetails} headings={this.props.headings.skills} />
                    <FieldToFill fromType={CONSTANTS.FIELD_HOBBIES} handleFieldTypes={this.props.handleFieldTypes} handleAddDetails={this.props.handleAddDetails} headings={this.props.headings.hobbies} />
                    <FieldToFill fromType={CONSTANTS.FIELD_LANGUAGES} handleFieldTypes={this.props.handleFieldTypes} handleAddDetails={this.props.handleAddDetails} headings={this.props.headings.languages} />
                </div>
            </div>
        )
    }
}

export default SidePanelFields;