import React from 'react';
import { InputGroup, FormControl, Form, Button } from 'react-bootstrap';
import { FieldToFillInterfaces } from '../interfaces';
import FormItemsListElement from './formAddItemHtml';
class FieldToFill extends React.Component<FieldToFillInterfaces> {
    render() {
        return (
            <div id={this.props.fieldType} className='side-panel-field-form p-2 mb-5 rounded'>
                <h6>{this.props.fieldType}</h6>
                <small>Heading</small>
                <InputGroup className="mb-3" size='sm'>
                    <FormControl
                        name={this.props.headings}
                        value={this.props.headings}
                        autoComplete='off'
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.props.handleFieldTypes(this.props.fromType, event)}
                    />
                </InputGroup>
                {this.props.fieldType.includes('Objective') ?
                    (<>
                        <small>Add your thoughts</small>
                        <Form.Control as="textarea" rows={3}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.props.handleFieldTypes(this.props.fromType + ' Items', event)}
                        />
                    </>
                    ) : <>
                        <div className='d-flex flex-column'>
                            <FormItemsListElement fieldType={this.props.fieldType} heading={this.props.headings} itemsToAdd={this.props.itemsToAdd} hanldeItemsActions={this.props.hanldeItemsActions} />
                        </div>
                        <Button className='flex-row btn-secondary justify-content-end' size='sm' onClick={(event) => this.props.handleAddItemModal(this.props.fromType, event)} > Add</Button>
                    </>
                }
            </div>
        )
    }
}

export default FieldToFill;
