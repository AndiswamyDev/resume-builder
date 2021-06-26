import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { CONSTANTS } from '../constants';
import { ColorOptionsInterfaces } from '../interfaces';
import TextBgColors from '../components/textBgColorOptions';

class ColorOptions extends React.Component<ColorOptionsInterfaces>{
    render() {
        console.log(this.props.selectedProperties);
        const colorOptions = [['black', '#2c785c', 'blue', 'aqua'], ['violet', 'pink', 'red', 'brown'], ['#a436a4', '#36a4a3', '#ea9f1a', 'purple'], ['#cb1e97', '#790a29c9', '#3cd796db', 'lavender']];
        return (
            <div id={CONSTANTS.COLOUR_PALETTE_OPTION} className='d-flex  flex-column'>
                <h6 className='d-flex justify-content-center bg-primary rounded p-2'>Color palette</h6>
                <div className='border-bottom border-primary'>
                    <h6 className='d-flex justify-content-center text-primary rounded p-2'>Heading Color</h6>
                    {colorOptions.map((color: any) => {
                        return (<div className='d-flex flex-row d-flex justify-content-center  '>
                            {color.map((item: string) => {
                                return (
                                    <span className='m-2 p-2 color-palette-options rounded' style={{ backgroundColor: item }} onClick={() => this.props.selectHeadingColorPicker(item)}>
                                        {this.props.selectedProperties.selectedHeadingColor === item ? <FontAwesomeIcon className='mb-3' icon={faCheckCircle}></FontAwesomeIcon> : null}
                                    </span>
                                );
                            })}
                        </div>)
                    })}
                </div>
                <div className='border-bottom border-primary p-1 m-2'>
                    <h6 className='d-flex justify-content-center  text-primary rounded p-2'>Text Color</h6>
                    <TextBgColors selectHeadingColorPicker={this.props.selectHeadingColorPicker} handleTextAndBgColor={this.props.handleTextAndBgColor} selectedProperties={this.props.selectedProperties} type='text' />
                </div>
                <div className='p-1 m-2'>
                    <h6 className='d-flex justify-content-center text-primary rounded p-2'>Background Color</h6>
                    <TextBgColors selectHeadingColorPicker={this.props.selectHeadingColorPicker} handleTextAndBgColor={this.props.handleTextAndBgColor} selectedProperties={this.props.selectedProperties} type='background' />
                </div>
            </div>
        )
    }
}

export default ColorOptions;