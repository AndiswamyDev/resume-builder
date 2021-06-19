import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import { CONSTANTS } from '../constants';

export const initiateTooltip = () => {

    //left side panel icons
    tippy(`#${CONSTANTS.PROFILE}`, {
        content: 'Profile',
        animation: 'scale',
        placement: 'right'
    });
    tippy(`#${CONSTANTS.SOCIAL_NETWORKS}`, {
        content: 'Social Networks',
        animation: 'scale',
        placement: 'right'
    });
    tippy(`#${CONSTANTS.OBJECTIVE}`, {
        content: 'Objective',
        animation: 'scale',
        placement: 'right'
    });
    tippy(`#${CONSTANTS.WORK_EXPERIENCES}`, {
        content: 'Work Experiences',
        animation: 'scale',
        placement: 'right'
    });
    tippy(`#${CONSTANTS.EDUCATION}`, {
        content: 'Educations',
        animation: 'scale',
        placement: 'right'
    });
    tippy(`#${CONSTANTS.PROJECTS}`, {
        content: 'Projects',
        animation: 'scale',
        placement: 'right'
    });
    tippy(`#${CONSTANTS.AWARDS}`, {
        content: 'Awards',
        animation: 'scale',
        placement: 'right'
    });
    tippy(`#${CONSTANTS.CERTIFICATIONS}`, {
        content: 'Certifications',
        animation: 'scale',
        placement: 'right'
    });
    tippy(`#${CONSTANTS.SKILLS}`, {
        content: 'Skills',
        animation: 'scale',
        placement: 'right'
    });
    tippy(`#${CONSTANTS.HOBBIES}`, {
        content: 'Hobbies',
        animation: 'scale',
        placement: 'right'
    });
    tippy(`#${CONSTANTS.LANGUAGES}`, {
        content: 'Languages',
        animation: 'scale',
        placement: 'right'
    });
}