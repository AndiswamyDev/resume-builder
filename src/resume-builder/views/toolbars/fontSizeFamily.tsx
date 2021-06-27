import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FormControl } from 'react-bootstrap';
import { CONSTANTS } from '../../constants';
import { FontSizeFamilyInterfaces } from '../../interfaces';
// import TextBgColors from '../../components/textBgColorOptions';

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
                                    return (<div className='d-flex flex-row'>
                                        {family.map((fontFamily: any) => {
                                            return (
                                                <h6 className='m-2 p-2 rounded' style={{ fontFamily: family, color: 'black' }}
                                                // onClick={() => this.props.selectHeadingColorPicker(item)}
                                                >
                                                    {Object.keys(fontFamily)}
                                                </h6>
                                            )
                                        })
                                        }
                                    </div>

                                    )
                                })}
                                {property === 'Font Size' &&
                                    // <div className=>

                                    // </div>
                                    <FormControl
                                        size='sm'
                                        value={this.props.selectedFontProperties.selectedFontSize}
                                        autoComplete='off'
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