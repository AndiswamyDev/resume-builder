import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FormControl } from 'react-bootstrap';
import { TextBgColorsInterfaces } from '../interfaces';
import { checkWhiteColors } from '../utils/checkValidations';

class TextBgColors extends React.Component<TextBgColorsInterfaces>{
    render() {
        return (
            <div className='d-flex justify-content-center m-2'>
                <div className='w-50'>
                    <FormControl
                        value={this.props.type === 'text' ? this.props.selectedProperties.selectedTextColor : this.props.selectedProperties.selectedBgColor}
                        autoComplete='off'
                        onChange={(event: any) => this.props.handleTextAndBgColor(this.props.type, event.target.value)}
                    />
                </div>
                {
                    this.props.type === 'text' ?
                        <span className={'m-2 p-2 color-palette-options rounded ' + (checkWhiteColors(this.props.selectedProperties.selectedTextColor) ? ' border border-dark' : 'border')} style={{ backgroundColor: this.props.type === 'text' ? this.props.selectedProperties.selectedTextColor : this.props.selectedProperties.selectedBgColor }}>
                            <FontAwesomeIcon className='mb-3' icon={faCheckCircle} color={checkWhiteColors(this.props.selectedProperties.selectedTextColor) ? 'black' : ''}></FontAwesomeIcon>
                        </span> :
                        <span className={'m-2 p-2 color-palette-options rounded ' + (checkWhiteColors(this.props.selectedProperties.selectedBgColor) ? ' border border-dark' : 'border')} style={{ backgroundColor: this.props.type === 'text' ? this.props.selectedProperties.selectedBgColor : this.props.selectedProperties.selectedBgColor }}>
                            <FontAwesomeIcon className='mb-3' icon={faCheckCircle} color={checkWhiteColors(this.props.selectedProperties.selectedBgColor) ? 'black' : ''}></FontAwesomeIcon>
                        </span>
                }
            </div>
        )
    }
}

export default TextBgColors;
