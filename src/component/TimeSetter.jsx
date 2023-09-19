import React, {useContext} from 'react';
import {VscTriangleDown, VscTriangleUp} from "react-icons/vsc";
import {decreaseTime, formatTime, increaseTime} from "../utils/timeService";
import {STR_HOURS, STR_MINUTES, STR_SECONDS} from "../constant/string";
import {ONE} from "../constant/number";
import TimerContextHolder from "./TimerContextHolder";

function TimeSetter({
                        hours,
                        minutes,
                        seconds,
                        onClickIncreaseTime,
                        onClickDecreaseTime,
                        onClickResetTime
                    }) {

    const SIZE_OF_TRIANGLE = 120;
    const {getSound} = useContext(TimerContextHolder);

    const handleClickIncreaseTime = (type, time) => {
        const result = increaseTime(type, time, ONE);
        onClickIncreaseTime(type, result);
        getSound();
    }

    const handleClickDecreaseTime = (type, time) => {
        const result = decreaseTime(type, time, ONE);
        onClickDecreaseTime(type, result);
        getSound();
    }

    const handleClickResetTime = () => {
        onClickResetTime();
        getSound();
    }

    const handleClickIncrease5Minutes = () => {
        const result = increaseTime(STR_MINUTES, minutes, 5);
        onClickIncreaseTime(STR_MINUTES, result);
        getSound();
    }

    const handleClickIncrease15Seconds = () => {
        const result = increaseTime(STR_SECONDS, seconds, 15);
        onClickDecreaseTime(STR_SECONDS, result);
        getSound();
    }

    return (
        <div className={"mt-2"}>
            <div className={"d-flex justify-content-around border-bottom"}>
                <VscTriangleUp
                    color="white"
                    size={SIZE_OF_TRIANGLE}
                    className={"cursor-pointer tag-hover-large"}
                    onClick={() => handleClickIncreaseTime(STR_HOURS, hours)}
                />
                <VscTriangleUp
                    color="white"
                    size={SIZE_OF_TRIANGLE}
                    className={"cursor-pointer tag-hover-large"}
                    onClick={() => handleClickIncreaseTime(STR_MINUTES, minutes)}
                />
                <VscTriangleUp
                    color="white"
                    size={SIZE_OF_TRIANGLE}
                    className={"cursor-pointer tag-hover-large"}
                    onClick={() => handleClickIncreaseTime(STR_SECONDS, seconds)}
                />
            </div>
            <div className={"d-flex justify-content-evenly"} style={{fontSize: "7rem"}}>
                <span>{formatTime(hours)}</span>:
                <span>{formatTime(minutes)}</span>:
                <span>{formatTime(seconds)}</span>
            </div>
            <div className={"d-flex justify-content-around border-top"}>
                <VscTriangleDown
                    color="white"
                    size={SIZE_OF_TRIANGLE}
                    className={"cursor-pointer tag-hover-large"}
                    onClick={() => handleClickDecreaseTime(STR_HOURS, hours)}
                />
                <VscTriangleDown
                    color="white"
                    size={SIZE_OF_TRIANGLE}
                    className={"cursor-pointer tag-hover-large"}
                    onClick={() => handleClickDecreaseTime(STR_MINUTES, minutes)}
                />
                <VscTriangleDown
                    color="white"
                    size={SIZE_OF_TRIANGLE}
                    className={"cursor-pointer tag-hover-large"}
                    onClick={() => handleClickDecreaseTime(STR_SECONDS, seconds)}
                />
            </div>
            <div className={"d-flex justify-content-around h4"}>
                <div className={"bg-red-btn ps-5 pe-5 pt-1 pb-1 cursor-pointer tag-hover-large"}
                     onClick={handleClickResetTime}
                >
                    reset
                </div>
                <div className={"bg-grey-btn ps-5 pe-5 pt-1 pb-1 cursor-pointer tag-hover-large"}
                     onClick={handleClickIncrease5Minutes}
                >
                    + 05m
                </div>
                <div className={"bg-grey-btn ps-5 pe-5 pt-1 pb-1 cursor-pointer tag-hover-large"}
                     onClick={handleClickIncrease15Seconds}
                >
                    + 15s
                </div>
            </div>
        </div>
    );
}

export default TimeSetter;