import React from 'react';
import { ToolBarOptionsInterface } from '../interfaces';
import { Button } from 'react-bootstrap';
import { CONSTANTS } from '../constants';

class ToolBarOptions extends React.Component<ToolBarOptionsInterface>{
    render() {
        const colorOptions = [['red', 'blue', 'green'], ['violet', 'pink', 'black'], ['#a436a4', '#36a4a3', '#ea9f1a'], ['#cb1e97', '#790a29c9', '#3cd796db']];
        return (
            <div className='d-flex flex-row justify-content-center border border-primary rounded p-2 m-1'>
                {this.props.toolBarOptionType === 'templates' && <div id={CONSTANTS.TEMPLATES_OPTION}>
                    <div className='bg-primary rounded'>
                        <h6 className='p-2'>Templates</h6>
                    </div>
                </div>}
                {this.props.toolBarOptionType === 'color' && <div id={CONSTANTS.COLOUR_PALETTE_OPTION}>
                    <h6 className='bg-primary rounded p-2'>Color palette</h6>
                    <h6 className='text-primary rounded'>Heading Color</h6>
                    {colorOptions.map((color: any) => {
                        return (<div className='d-flex flex-row'>
                            {color.map((item: string) => {
                                return (
                                    <span className='m-2 p-2 color-palette-options rounded' style={{ backgroundColor: item }}></span>
                                );
                            })}
                        </div>)
                    })}
                </div>}
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