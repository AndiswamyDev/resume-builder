import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FormControl } from 'react-bootstrap';
import { CONSTANTS } from '../../constants';
import { FontSizeFamilyInterfaces } from '../../interfaces';

class FontSizeFamily extends React.Component<FontSizeFamilyInterfaces> {
    render() {
        const fontProperties = ['Font Size', 'Font Family']
        const fontFamilyOptions = [
            [{ Lato: 'Lato' }, { Sans: 'Sans-serif' }],
            [{ Titillium: 'Titillium Web' }],
            [{ Raleway: 'Raleway' }, { SansPro: 'Source Sans Pro' }],
            [{ Monospace: 'Monospace' }, { Montserrat: 'Montserrat' }],
            [{ Rubik: 'Rubik' }]];
        return (
            <div className='d-flex flex-column'>
                {fontProperties.map((property: any) => {
                    return (
                        <div id={property === 'Font Size' ? CONSTANTS.FONT_SIZE_OPTION : CONSTANTS.FONT_FAMILY_OPTION} className='d-flex flex-column m-2 border-bottom border-primary'>
                            <h6 className='d-flex justify-content-center bg-primary rounded p-2'>{property}</h6>
                            <div className='d-flex flex-column d-flex justify-content-center'>
                                {property === 'Font Family' && fontFamilyOptions.map((family: any) => {
                                    return (<div className='d-flex font-family-options flex-column'>
                                        {family.map((fontFamily: any) => {
                                            return (
                                                <div className='d-flex justify-content-center'>
                                                    <span className='m-2 p-1 rounded textt-primary' style={{ fontFamily: `${Object.values(fontFamily)}`, color: 'black' }}
                                                        onClick={() => this.props.handleFontSizeFamily(property, `${Object.keys(fontFamily)}`)}
                                                    >
                                                        {Object.keys(fontFamily)}
                                                        {this.props.selectedFontProperties.selectedFontFamily == Object.keys(fontFamily) ? <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> : ''}
                                                    </span>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                    )
                                })}
                                {property === 'Font Size' &&
                                    <FormControl
                                        size='sm'
                                        value={this.props.selectedFontProperties.selectedFontSize}
                                        autoComplete='off'
                                        maxLength={2}
                                        onChange={(event: any) => this.props.handleFontSizeFamily(property, event.target.value)}
                                    />
                                }
                            </div>
                        </div>
                    )
                })
                }
            </div>

        )
    }
}

export default FontSizeFamily;