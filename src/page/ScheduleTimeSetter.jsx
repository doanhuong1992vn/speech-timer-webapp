import React, {useContext} from 'react';
import TimeSetter from "../component/TimeSetter";
import Header from "../component/Header";
import TimerContext from "../component/TimerContext";
import {createTime} from "../utils/timeService";
import {ZERO} from "../constant/number";

function ScheduleTimeSetter() {

    const {scheduleTime, setScheduleTime} = useContext(TimerContext);

    const handleClickIncreaseTime = (type, time) => {
        const _scheduleTime = {...scheduleTime};
        _scheduleTime[type] = time;
        setScheduleTime(_scheduleTime);
    }

    const handleClickDecreaseTime = (type, time) => {
        const _scheduleTime = {...scheduleTime};
        _scheduleTime[type] = time;
        setScheduleTime(_scheduleTime);
    }

    const handleClickResetTime = () => {
        const _scheduleTime = createTime(ZERO, ZERO, ZERO);
        setScheduleTime(_scheduleTime);
    }

    return (
        <div className={"col-12 col-md-10 text-white fw-bold"}>
            <Header content={"set time"} />
            <TimeSetter
                hours={scheduleTime.hours}
                minutes={scheduleTime.minutes}
                seconds={scheduleTime.seconds}
                onClickIncreaseTime={handleClickIncreaseTime}
                onClickDecreaseTime={handleClickDecreaseTime}
                onClickResetTime={handleClickResetTime}
            />
        </div>
    );
}

export default ScheduleTimeSetter;