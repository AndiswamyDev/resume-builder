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
                    <FieldToFill fromType={this.props.headings.socialNetworks} fieldType={CONSTANTS.FIELD_SOCIAL_NETWORKS} handleFieldTypes={this.props.handleFieldTypes} handleAddItemModal={this.props.handleAddItemModal} headings={this.props.headings.socialNetworks} itemsToAdd={this.props.itemsToAdd} hanldeItemsActions={this.props.hanldeItemsActions} />

                    <FieldToFill fromType={this.props.headings.objective} fieldType={CONSTANTS.FIELD_OBJECTIVE} handleFieldTypes={this.props.handleFieldTypes} handleAddItemModal={this.props.handleAddItemModal} headings={this.props.headings.objective} itemsToAdd={this.props.itemsToAdd} hanldeItemsActions={this.props.hanldeItemsActions} />

                    <FieldToFill fromType={this.props.headings.workExperiences} fieldType={CONSTANTS.FIELD_WORK_EXPERIENCES} handleFieldTypes={this.props.handleFieldTypes} handleAddItemModal={this.props.handleAddItemModal} headings={this.props.headings.workExperiences} itemsToAdd={this.props.itemsToAdd} hanldeItemsActions={this.props.hanldeItemsActions} />

                    <FieldToFill fromType={this.props.headings.educations} fieldType={CONSTANTS.FIELD_EDUCATION} handleFieldTypes={this.props.handleFieldTypes} handleAddItemModal={this.props.handleAddItemModal} headings={this.props.headings.educations} itemsToAdd={this.props.itemsToAdd} hanldeItemsActions={this.props.hanldeItemsActions} />

                    <FieldToFill fromType={this.props.headings.projects} fieldType={CONSTANTS.FIELD_PROJECTS} handleFieldTypes={this.props.handleFieldTypes} handleAddItemModal={this.props.handleAddItemModal} headings={this.props.headings.projects} itemsToAdd={this.props.itemsToAdd} hanldeItemsActions={this.props.hanldeItemsActions} />

                    <FieldToFill fromType={this.props.headings.awards} fieldType={CONSTANTS.FIELD_AWARDS} handleFieldTypes={this.props.handleFieldTypes} handleAddItemModal={this.props.handleAddItemModal} headings={this.props.headings.awards} itemsToAdd={this.props.itemsToAdd} hanldeItemsActions={this.props.hanldeItemsActions} />

                    <FieldToFill fromType={this.props.headings.certifications} fieldType={CONSTANTS.FIELD_CERTIFICATIONS} handleFieldTypes={this.props.handleFieldTypes} handleAddItemModal={this.props.handleAddItemModal} headings={this.props.headings.certifications} itemsToAdd={this.props.itemsToAdd} hanldeItemsActions={this.props.hanldeItemsActions} />

                    <FieldToFill fromType={this.props.headings.skills} fieldType={CONSTANTS.FIELD_SKILLS} handleFieldTypes={this.props.handleFieldTypes} handleAddItemModal={this.props.handleAddItemModal} headings={this.props.headings.skills} itemsToAdd={this.props.itemsToAdd} hanldeItemsActions={this.props.hanldeItemsActions} />

                    <FieldToFill fromType={this.props.headings.hobbies} fieldType={CONSTANTS.FIELD_HOBBIES} handleFieldTypes={this.props.handleFieldTypes} handleAddItemModal={this.props.handleAddItemModal} headings={this.props.headings.hobbies} itemsToAdd={this.props.itemsToAdd} hanldeItemsActions={this.props.hanldeItemsActions} />

                    <FieldToFill fromType={this.props.headings.languages} fieldType={CONSTANTS.FIELD_LANGUAGES} handleFieldTypes={this.props.handleFieldTypes} handleAddItemModal={this.props.handleAddItemModal} headings={this.props.headings.languages} itemsToAdd={this.props.itemsToAdd} hanldeItemsActions={this.props.hanldeItemsActions} />
                </div>
            </div>
        )
    }
}

export default SidePanelFields;