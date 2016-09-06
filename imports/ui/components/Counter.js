import React, {Component} from "react";
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {FormControl, FieldGroup, Form, Button} from 'react-bootstrap'

export default class Countdown extends TrackerReact(Component) {

    constructor() {
        super();

        this.state = {
            deadline: new Date("December 5, 2016 00:00:00"),
            timeInterval: 0
        };

        this.animateClock = this.animateClock.bind(this);
        this.updateTimer = this.updateTimer.bind(this);
        this.startTimer = this.startTimer.bind(this);
    }


    componentWillMount() {
        this.startTimer("clock", this.state.deadline, this);
    }

    componentWillUnmount() {
        //clearInterval(window.timerTracker);
        clearInterval(this.state.timeInterval);
    }

    animateClock(span) {
        span.className = "turn";
        setTimeout(function () {
            span.className = "";
        }, 700);
    }

    startTimer(id, deadline, obj) {
        var timerInterval = setInterval(function () {
            var clock = document.getElementById(id);
            var timer = obj.updateTimer(deadline);
            obj.setState({timeInterval: timerInterval}); // to keep track of timeInterval so we can unmount it later

            clock.innerHTML = '<div id="counter" class="row"><div class="numberCircle"><span>' + timer.days + '</span><br/><div class="unit">DAYS</div></div>'
                + '<div class="numberCircle"><span>' + timer.hours + '</span><br/><div class="unit">HOURS</div></div>'
                + '<div class="numberCircle"><span>' + timer.minutes + '</span><br/><div class="unit">MINUTES</div></div>'
                + '<div class="numberCircle"><span>' + timer.seconds + '</span><br/><div class="unit">SECONDS</div></div></div>'

            //animations
            var spans = clock.getElementsByTagName("span");
            obj.animateClock(spans[3]);
            if (timer.seconds == 59) obj.animateClock(spans[2]);
            if (timer.minutes == 59 && timer.seconds == 59) obj.animateClock(spans[1]);
            if (timer.hours == 23 && timer.minutes == 59 && timer.seconds == 59) obj.animateClock(spans[0]);

            //check for end of timer
            if (timer.total < 1) {
                clearInterval(obj.state.timeInterval);
                clock.innerHTML = '<span>0</span><span>0</span><span>0</span><span>0</span>';
            }


        }, 1000);
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

    render() {

        return (
            <div className="container-counter">
                <div className="layer">
                    <h1 id="timer-title">Something Awesome is Coming Soon...</h1>
                    <div id="del-countdown">
                        <div id="clock"></div>
                    </div>
                    <div className="element-centered">
                        <input id="input-email" type="text" placeholder="Email Address"/>
                        <Button type="submit" onClick={this.handleClick} className="btn btn-call-to-action">Notify
                            me</Button>

                        <CircleButton btnCircle="btn btn-call-to-action btn-circle btn-lg"
                                      classIcon="zmdi zmdi-chevron-down zmdi-hc-2x"/>
                    </div>
                </div>
            </div>
        )
    }
}
