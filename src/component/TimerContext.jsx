import {createContext, useState} from "react";
import {INIT_DANGER_TIME, INIT_SCHEDULE_TIME, INIT_URGENT_TIME, INIT_WARNING_TIME, ZERO} from "../constant/number";
import {createTime} from "../utils/timeService";

const TimerContext = createContext({});

export const TimerContextProvider = ({children}) => {

    const [scheduleTime, setScheduleTime] = useState(createTime(ZERO, INIT_SCHEDULE_TIME, ZERO));
    const [warningTime, setWarningTime] = useState(INIT_WARNING_TIME);
    const [urgentTime, setUrgentTime] = useState(INIT_URGENT_TIME);
    const [dangerTime, setDangerTime] = useState(INIT_DANGER_TIME);

    return (
        <TimerContext.Provider
            value={{scheduleTime, setScheduleTime, warningTime, urgentTime, dangerTime}}
        >
            {children}
        </TimerContext.Provider>
    )
}

export default TimerContext;