import React from 'react';
import {ZERO} from "../constant/number";
import {formatTime} from "../utils/timeService";
import {TbClockHour9} from "react-icons/tb";

function Timer({hours, minutes, seconds, setting}) {
    return (
        <>
            {
                setting && hours === ZERO && minutes === ZERO && seconds === ZERO
                    ? <TbClockHour9 size={50} />
                    : <>
                        {hours !== ZERO &&
                            <>
                                <span>{formatTime(hours)}</span>
                                <span className={"ms-2 me-2"}>:</span>
                            </>
                        }
                        <span>{formatTime(minutes)}</span>
                        <span className={"ms-2 me-2"}>:</span>
                        <span>{formatTime(seconds)}</span>
                    </>
            }

        </>
    );
}

export default Timer;