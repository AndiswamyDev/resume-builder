import React from 'react';
import { ToolBarOptionsInterface } from '../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { InputGroup, FormControl, Form, Button } from 'react-bootstrap';
import ColorOptions from './colorPalette';
import { CONSTANTS } from '../constants';

class ToolBarOptions extends React.Component<ToolBarOptionsInterface>{

    state = {
        selectedHeadingColor: 'black',
        selectedTextColor: 'black',
        selectedBgColor: '#fff'
    }
    selectHeadingColorPicker = (color: string) => {
        console.log(color);
        this.setState({
            selectedHeadingColor: color
        });
    }
    handleTextAndBgColor = (type: string, color: string) => {
        switch (type) {
            case 'text':
                this.setState({
                    selectedTextColor: color
                });
                break;
            case 'background':
                this.setState({
                    selectedBgColor: color
                });
                break;
            default:
                break;
        }
    }
    render() {
        console.log(this.state.selectedTextColor);
        const selectedProperties = {
            selectedHeadingColor: this.state.selectedHeadingColor,
            selectedTextColor: this.state.selectedTextColor,
            selectedBgColor: this.state.selectedBgColor
        }
        return (
            <div className='d-flex flex-row border border-primary rounded p-2 m-2'>
                {this.props.toolBarOptionType === 'templates' && <div id={CONSTANTS.TEMPLATES_OPTION}>
                    <div className='bg-primary rounded'>
                        <h6 className='p-2'>Templates</h6>
                    </div>
                </div>}
                {this.props.toolBarOptionType === 'color' && <ColorOptions selectHeadingColorPicker={this.selectHeadingColorPicker} handleTextAndBgColor={this.handleTextAndBgColor} selectedProperties={selectedProperties} />}
                {this.props.toolBarOptionType === 'size' && <div id={CONSTANTS.FONT_SIZE_OPTION}>
                    <div className='bg-primary rounded'>
                        <h6 className='p-2'>Font size</h6>
                    </div>
                </div>}
                {this.props.toolBarOptionType === 'family' && <div id={CONSTANTS.FONT_FAMILY_OPTION}>
                    <div className='bg-primary rounded'>
                        <h6 className='p-2'>Font family</h6>
                    </div>
                </div>}
            </div>
        )
    }
}

export default ToolBarOptions;