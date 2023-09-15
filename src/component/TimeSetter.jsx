import React from 'react';
import {VscTriangleDown, VscTriangleUp} from "react-icons/vsc";
import {decreaseTime, formatTime, increaseTime} from "../utils/timeService";
import {STR_HOURS, STR_MINUTES, STR_SECONDS} from "../constant/string";
import {ONE} from "../constant/number";

function TimeSetter({
                        hours,
                        minutes,
                        seconds,
                        onClickIncreaseTime,
                        onClickDecreaseTime,
                        onClickResetTime
                    }) {

    const SIZE_OF_TRIANGLE = 120;

    const handleClickIncreaseTime = (type, time, callback) => {
      const result = increaseTime(time, ONE);
      callback(type, result);
    }

    const handleClickDecreaseTime = (type, time, callback) => {
        const result = decreaseTime(time, ONE);
        callback(type, result);
    }

    const handleClickResetTime = () => {
        onClickResetTime();
    }

    const handleClickIncrease5Minutes = () => {
        const result = increaseTime(minutes, 5);
        onClickIncreaseTime(STR_MINUTES, result);
    }

    const handleClickIncrease15Seconds = () => {
        const result = increaseTime(seconds, 15);
        onClickDecreaseTime(STR_SECONDS, result);
    }

    return (
        <div className={"mt-2"}>
            <div className={"d-flex justify-content-around border-bottom"}>
                <VscTriangleUp
                    color="white"
                    size={SIZE_OF_TRIANGLE}
                    className={"cursor-pointer"}
                    onClick={() => handleClickIncreaseTime(STR_HOURS, hours, onClickIncreaseTime)}
                />
                <VscTriangleUp
                    color="white"
                    size={SIZE_OF_TRIANGLE}
                    className={"cursor-pointer"}
                    onClick={() => handleClickIncreaseTime(STR_MINUTES, minutes, onClickIncreaseTime)}
                />
                <VscTriangleUp
                    color="white"
                    size={SIZE_OF_TRIANGLE}
                    className={"cursor-pointer"}
                    onClick={() => handleClickIncreaseTime(STR_SECONDS, seconds, onClickIncreaseTime)}
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
                    className={"cursor-pointer"}
                    onClick={() => handleClickDecreaseTime(STR_HOURS, hours, onClickDecreaseTime)}
                />
                <VscTriangleDown
                    color="white"
                    size={SIZE_OF_TRIANGLE}
                    className={"cursor-pointer"}
                    onClick={() => handleClickDecreaseTime(STR_MINUTES, minutes, onClickDecreaseTime)}
                />
                <VscTriangleDown
                    color="white"
                    size={SIZE_OF_TRIANGLE}
                    className={"cursor-pointer"}
                    onClick={() => handleClickDecreaseTime(STR_SECONDS, seconds, onClickDecreaseTime)}
                />
            </div>
            <div className={"d-flex justify-content-around h4"}>
                <div className={"bg-red-btn ps-5 pe-5 pt-1 pb-1 cursor-pointer"}
                     onClick={handleClickResetTime}
                >
                    reset
                </div>
                <div className={"bg-grey-btn ps-5 pe-5 pt-1 pb-1 cursor-pointer"}
                     onClick={handleClickIncrease5Minutes}
                >
                    + 05m
                </div>
                <div className={"bg-grey-btn ps-5 pe-5 pt-1 pb-1 cursor-pointer"}
                     onClick={handleClickIncrease15Seconds}
                >
                    + 15s
                </div>
            </div>
        </div>
    );
}

export default TimeSetter;