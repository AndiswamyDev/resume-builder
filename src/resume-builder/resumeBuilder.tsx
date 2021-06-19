import React from 'react';
import BuilderNavBar from './components/builderNavbar';
import LeftSideBarOptions from './components/leftSideBarOptions';
import { CONSTANTS } from './constants';

class ResumeBuilder extends React.Component {
    render() {
        return (
            <div id={CONSTANTS.RESUME_BUILDER} className=''>
                <div className='resume-builder-nav-bar mt-2'>
                    <BuilderNavBar />
                </div>
                <div className='mb-5'>
                    <LeftSideBarOptions />
                </div>
                {/* <div className='d-flex'>
                    <footer>
                        @copyright 2021
                    </footer>
                </div> */}
            </div>
        )
    }
}

export default ResumeBuilder;