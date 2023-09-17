import {createContext, useState} from "react";
import {INIT_DANGER_TIME, INIT_SCHEDULE_TIME, INIT_URGENT_TIME, INIT_WARNING_TIME, ONE, ZERO} from "../constant/number";
import {createTime, getSeconds} from "../utils/timeService";
import {HOME_PAGE} from "../constant/page";

const TimerContext = createContext({});

export const TimerContextProvider = ({children}) => {

    const [scheduleTime, setScheduleTime] = useState(createTime(ZERO, INIT_SCHEDULE_TIME, ZERO));
    const [warningTime, setWarningTime] = useState(createTime(ZERO, ONE, 30));
    const [urgentTime, setUrgentTime] = useState(createTime(ZERO, ZERO, 45));
    const [dangerTime, setDangerTime] = useState(createTime(ZERO, ZERO, 15));
    const [totalSeconds, setTotalSeconds] = useState(getSeconds(scheduleTime));
    const [historyPage, setHistoryPage] = useState(HOME_PAGE);

    return (
        <TimerContext.Provider
            value={{
                scheduleTime, setScheduleTime,
                warningTime, setWarningTime,
                urgentTime, setUrgentTime,
                dangerTime, setDangerTime,
                totalSeconds, setTotalSeconds,
                historyPage, setHistoryPage
        }}
        >
            {children}
        </TimerContext.Provider>
    )
}

export default TimerContext;