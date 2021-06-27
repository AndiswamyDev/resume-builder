import React from 'react';
import { ToolBarOptionsInterface } from '../../interfaces';
import ColorOptions from './colorPalette';
import FontSizeFamily from './fontSizeFamily';
import { CONSTANTS } from '../../constants';

class ToolBarOptions extends React.Component<ToolBarOptionsInterface>{

    state = {
        selectedHeadingColor: 'black',
        selectedTextColor: 'black',
        selectedBgColor: '#fff',
        selectedFontSize: '10',
        selectedFontFamily: 'Lato'
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
    handleFontSizeFamily = (type: string, value: string) => {
        console.log(type, value);

        switch (type) {
            case 'Font Size':
                this.setState({
                    selectedFontSize: value
                });
                break;
            case 'Font Family':
                this.setState({
                    selectedFontFamily: value
                });
                break;
            default:
                break;
        }
    }
    render() {
        console.log(this.state.selectedTextColor);
        const selectedColorProperties = {
            selectedHeadingColor: this.state.selectedHeadingColor,
            selectedTextColor: this.state.selectedTextColor,
            selectedBgColor: this.state.selectedBgColor
        }
        const selectedFontProperties = {
            selectedFontSize: this.state.selectedFontSize,
            selectedFontFamily: this.state.selectedFontFamily
        }
        console.log('%%%%%%', this.props.toolBarOptionType)
        return (
            <div className='d-flex flex-row border border-primary rounded p-2 m-2'>

                {this.props.toolBarOptionType === 'templates' && <div id={CONSTANTS.TEMPLATES_OPTION}>
                    <div className='bg-primary rounded'>
                        <h6 className='p-2'>Templates</h6>
                    </div>
                </div>}

                {/* colour tools */}
                {this.props.toolBarOptionType === 'color' && <ColorOptions selectHeadingColorPicker={this.selectHeadingColorPicker} handleTextAndBgColor={this.handleTextAndBgColor} selectedProperties={selectedColorProperties} />}

                {/* Font Size tools */}
                {/* {this.props.toolBarOptionType === 'size' && <FontSizeFamily type='Size' selectedFontProperties={selectedFontProperties} handleFontSizeFamily={this.handleFontSizeFamily} />} */}

                {/* Font famiily tools */}
                {this.props.toolBarOptionType === 'fonts' && <FontSizeFamily type='fonts' selectedFontProperties={selectedFontProperties} handleFontSizeFamily={this.handleFontSizeFamily} />}

            </div>
        )
    }
}

export default ToolBarOptions;