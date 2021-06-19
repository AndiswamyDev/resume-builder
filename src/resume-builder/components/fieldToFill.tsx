import React from 'react';
import { InputGroup, FormControl, Form, Button } from 'react-bootstrap';
import { FieldToFillInterfaces } from '../interfaces';
// import { CONSTANTS } from '../constants';
class FieldToFill extends React.Component<FieldToFillInterfaces> {
    render() {
        return (
            <div id={this.props.fromType} className='side-panel-field-form p-2 mb-5 rounded'>
                <h6>{this.props.fromType}</h6>
                <small>Heading</small>
                <InputGroup className="mb-3" size='sm'>
                    <FormControl
                        name={this.props.headings}
                        value={this.props.headings}
                        autoComplete='off'
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.props.handleFieldTypes(this.props.fromType, event)}
                    />
                </InputGroup>
                {this.props.fromType.includes('Objective') ?
                    (<>
                        <small>Add your thoughts</small>
                        <Form.Control as="textarea" rows={3} />
                    </>
                    ) : <>
                        <div className='d-flex flex-column'>
                            <span>No records added</span>
                        </div>
                        <Button className='flex-row btn-secondary justify-content-end' size='sm' onClick={() => this.props.handleAddDetails(this.props.fromType)} > Add</Button>
                    </>
                }
            </div>
        )
    }
}

export default FieldToFill;