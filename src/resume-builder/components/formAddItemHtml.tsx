import React from 'react';
import { Button } from 'react-bootstrap';
import { FormItemsListElementInterfaces, CreateItemInterfaces } from '../interfaces';

class FormItemsListElement extends React.Component<FormItemsListElementInterfaces>{
    render() {
        return (
            <>
                {(() => {
                    if (this.props.fieldType?.includes('Social')) {
                        return <CreateListHTML item={this.props.itemsToAdd.socialNetworks} heading={this.props.heading} hanldeItemsActions={this.props.hanldeItemsActions} />
                    } else if (this.props.fieldType?.includes('Work')) {
                        return <CreateListHTML item={this.props.itemsToAdd.workExperiences} heading={this.props.heading} hanldeItemsActions={this.props.hanldeItemsActions} />
                    }
                    else if (this.props.fieldType?.includes('Education')) {
                        return <CreateListHTML item={this.props.itemsToAdd.educations} heading={this.props.heading} hanldeItemsActions={this.props.hanldeItemsActions} />
                    }
                    else if (this.props.fieldType?.includes('Project')) {
                        return <CreateListHTML item={this.props.itemsToAdd.projects} heading={this.props.heading} hanldeItemsActions={this.props.hanldeItemsActions} />
                    }
                    else if (this.props.fieldType?.includes('Awards')) {
                        return <CreateListHTML item={this.props.itemsToAdd.awards} heading={this.props.heading} hanldeItemsActions={this.props.hanldeItemsActions} />
                    }
                    else if (this.props.fieldType?.includes('Certification')) {
                        return <CreateListHTML item={this.props.itemsToAdd.certifications} heading={this.props.heading} hanldeItemsActions={this.props.hanldeItemsActions} />
                    }
                    else if (this.props.fieldType?.includes('Skills')) {
                        return <CreateListHTML item={this.props.itemsToAdd.skills} heading={this.props.heading} hanldeItemsActions={this.props.hanldeItemsActions} />
                    }
                    else if (this.props.fieldType?.includes('Hobbies')) {
                        return <CreateListHTML item={this.props.itemsToAdd.hobbies} heading={this.props.heading} hanldeItemsActions={this.props.hanldeItemsActions} />
                    }
                    else if (this.props.fieldType?.includes('Languages')) {
                        return <CreateListHTML item={this.props.itemsToAdd.languages} heading={this.props.heading} hanldeItemsActions={this.props.hanldeItemsActions} />
                    }
                })()}
            </>
        )
    }
}

class CreateListHTML extends React.Component<CreateItemInterfaces>{
    render() {
        return (
            this.props.item?.length > 0 ? (
                <div className='d-flex flex-column' >
                    {this.props.item.map((item: string, index: any) => {
                        return (
                            <div className='d-flex justify-content-between border border-light rounded p-1 m-1'>
                                <small className='p-1'>
                                    {item}
                                </small>
                                <Button size='sm' onClick={() => this.props.hanldeItemsActions(false, this.props.heading, index)}>
                                    x
                                </Button>
                            </div>
                        )
                    })
                    }
                </div>)
                :
                <div className='d-flex flex-row' >
                    <small>
                        No Record found
                    </small>
                </div>
        );
    }
}

export default FormItemsListElement;

