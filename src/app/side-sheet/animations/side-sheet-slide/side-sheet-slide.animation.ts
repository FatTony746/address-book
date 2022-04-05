import { trigger, state, style, animate, transition } from '@angular/animations';
import { SIDE_SHEET_SLIDE_STATES } from './side-sheet-slide.states';

export const SIDE_SHEET_SLIDE_ANIMATION = trigger('side-sheet-slide',
    [
        state(SIDE_SHEET_SLIDE_STATES.CLOSED, style({
            transform: 'translateX(100%)'
        })),
        state(SIDE_SHEET_SLIDE_STATES.OPEN, style({
            transform: 'translateX(0)'
        })),
        transition(SIDE_SHEET_SLIDE_STATES.CLOSED + ' => ' + SIDE_SHEET_SLIDE_STATES.OPEN, animate(
            '500ms ease'
        )),
        transition(SIDE_SHEET_SLIDE_STATES.OPEN + ' => ' + SIDE_SHEET_SLIDE_STATES.CLOSED, animate(
            '500ms ease'
        ))
    ]
);