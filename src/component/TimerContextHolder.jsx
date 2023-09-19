import {createContext, useState} from "react";
import useSound from 'use-sound';
import clickSound from "../asset/sound/click.mp3";
import {
    INDEX_OF_DEFAULT,
    INDEX_OF_ENABLED,
    INIT_DANGER_TIME,
    INIT_SCHEDULE_TIME,
    INIT_URGENT_TIME,
    INIT_WARNING_TIME,
    ZERO
} from "../constant/number";
import {getSeconds, getTimeData} from "../utils/timeService";
import {HOME_PAGE} from "../constant/page";
import {SOUND_MODE, TIME_FORMAT} from "../constant/string";

const TimerContextHolder = createContext({});

export const TimerContextProvider = ({children}) => {

    const [scheduleTime, setScheduleTime] = useState(getTimeData(INIT_SCHEDULE_TIME));
    const [warningTime, setWarningTime] = useState(getTimeData(INIT_WARNING_TIME));
    const [urgentTime, setUrgentTime] = useState(getTimeData(INIT_URGENT_TIME));
    const [dangerTime, setDangerTime] = useState(getTimeData(INIT_DANGER_TIME));
    const [totalSeconds, setTotalSeconds] = useState(getSeconds(scheduleTime));
    const [isRunning, setIsRunning] = useState(false);
    const [timeRunning, setTimeRunning] = useState(ZERO);
    const [historyPage, setHistoryPage] = useState(HOME_PAGE);
    const [soundMode, setSoundMode] = useState(SOUND_MODE[INDEX_OF_ENABLED]);
    const [showTimeline, setShowTimeline] = useState(true);
    const [showOvertime, setShowOvertime] = useState(false);
    const [countdown, setCountdown] = useState(true);
    const [timeFormat, setTimeFormat] = useState(TIME_FORMAT[INDEX_OF_DEFAULT]);

    const [soundClick] = useSound(clickSound);

    const getSound = () => {
        if (soundMode === SOUND_MODE[INDEX_OF_ENABLED]) {
            soundClick();
        }
    }

    return (
        <TimerContextHolder.Provider
            value={{
                scheduleTime, setScheduleTime,
                warningTime, setWarningTime,
                urgentTime, setUrgentTime,
                dangerTime, setDangerTime,
                totalSeconds, setTotalSeconds,
                isRunning, setIsRunning,
                timeRunning, setTimeRunning,
                historyPage, setHistoryPage,
                soundMode, setSoundMode,
                showTimeline, setShowTimeline,
                showOvertime, setShowOvertime,
                countdown, setCountdown,
                timeFormat, setTimeFormat,
                getSound
        }}
        >
            {children}
        </TimerContextHolder.Provider>
    )
}

export default TimerContextHolder;