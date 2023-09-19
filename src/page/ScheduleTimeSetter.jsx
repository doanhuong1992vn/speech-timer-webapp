import React, {useContext} from 'react';
import TimeSetter from "../component/TimeSetter";
import Header from "../component/Header";
import TimerContextHolder from "../component/TimerContextHolder";
import {createTime, getSeconds} from "../utils/timeService";
import {ZERO} from "../constant/number";

function ScheduleTimeSetter() {

    const {scheduleTime, setScheduleTime, setTotalSeconds} = useContext(TimerContextHolder);

    const handleClickIncreaseTime = (type, time) => {
        const _scheduleTime = {...scheduleTime};
        _scheduleTime[type] = time;
        setTime(_scheduleTime);
    };

    const handleClickDecreaseTime = (type, time) => {
        const _scheduleTime = {...scheduleTime};
        _scheduleTime[type] = time;
        setTime(_scheduleTime);
    };

    const handleClickResetTime = () => {
        const _scheduleTime = createTime(ZERO, ZERO, ZERO);
        setTime(_scheduleTime);
    };

    const setTime = (scheduleTime) => {
        setScheduleTime(scheduleTime);
        setTotalSeconds(getSeconds(scheduleTime));
    }

    return (
        <div className={"col-12 col-md-10 text-white fw-bold schedule-config"}>
            <Header content={"set time"} />
            <TimeSetter
                hours={scheduleTime?.hours}
                minutes={scheduleTime?.minutes}
                seconds={scheduleTime?.seconds}
                onClickIncreaseTime={handleClickIncreaseTime}
                onClickDecreaseTime={handleClickDecreaseTime}
                onClickResetTime={handleClickResetTime}
            />
        </div>
    );
}

export default ScheduleTimeSetter;