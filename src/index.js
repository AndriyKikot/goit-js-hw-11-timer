"use strict";

import './css/styles.css'

import { CountdownTimer } from './js/CountdownTimer.js'


const countdownTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('January 1, 2021'),
});

countdownTimer.timer();