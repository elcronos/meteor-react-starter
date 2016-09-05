import React, {Component} from "react";
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { FormControl,FieldGroup, Form, Button } from 'react-bootstrap'

export default class Countdown extends TrackerReact(Component) {

    componentWillUnmount() {
        clearInterval(window.timerTracker);
    }

    updateTimer(deadline) {
        var time = deadline - new Date();
        return {
            'days': Math.floor(time / (1000 * 60 * 60 * 24)),
            'hours': Math.floor((time / (1000 * 60 * 60)) % 24),
            'minutes': Math.floor((time / 1000 / 60) % 60),
            'seconds': Math.floor((time / 1000) % 60),
            'total': time
        };
    }


    animateClock(span) {
        span.className = "turn";
        setTimeout(function () {
            span.className = "";
        }, 700);
    }

    startTimer(id, deadline) {
        var timerInterval = setInterval(function () {
            var clock = document.getElementById(id);
            var timer = Countdown_Timer.prototype.updateTimer(deadline);
            window.timerTracker = timerInterval; // to keep track of timeInterval so we can unmount it later

            clock.innerHTML = '<span>' + timer.days + '</span>'
                + '<span>' + timer.hours + '</span>'
                + '<span>' + timer.minutes + '</span>'
                + '<span>' + timer.seconds + '</span>';

            //animations
            var spans = clock.getElementsByTagName("span");
            Countdown_Timer.prototype.animateClock(spans[3]);
            if (timer.seconds == 59) Countdown_Timer.prototype.animateClock(spans[2]);
            if (timer.minutes == 59 && timer.seconds == 59) Countdown_Timer.prototype.animateClock(spans[1]);
            if (timer.hours == 23 && timer.minutes == 59 && timer.seconds == 59) Countdown_Timer.prototype.animateClock(spans[0]);

            //check for end of timer
            if (timer.total < 1) {
                clearInterval(timerInterval);
                clock.innerHTML = '<span>0</span><span>0</span><span>0</span><span>0</span>';
            }


        }, 1000);
    }

    render() {

        return (
            <div className="container-counter">
                <div className="layer">
                <h1 id="timer-title">Something Awesome is Coming Soon...</h1>
                <div id="del-countdown">
                    <div id="clock"></div>
                    <div id="units">
                        <span>Days</span>
                        <span>Hours</span>
                        <span>Minutes</span>
                        <span>Seconds</span>
                    </div>
                </div>
                <div className="element-centered">
                    <input type="text" placeholder="Email Address"></input>
                    <Button type="submit" onClick={this.handleClick} className="btn btn-call-to-action">Notify me</Button>

                  <CircleButton btnCircle="btn btn-call-to-action btn-circle btn-lg" classIcon="zmdi zmdi-chevron-down zmdi-hc-2x"/>
                </div>
                </div>
            </div>
        )
    }
}
