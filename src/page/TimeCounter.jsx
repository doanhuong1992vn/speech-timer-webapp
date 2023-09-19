import {useContext, useEffect, useLayoutEffect, useState} from 'react';
import useSound from 'use-sound';
import chimesSound from "../asset/sound/chimes.mp3";
import ProgressBar from "../component/ProgressBar";
import ControlBar from "../component/ControlBar";
import TimerContextHolder from "../component/TimerContextHolder";
import {getPercent, getPercentData, getTimeData} from "../utils/timeService";
import {
    FIFTEEN_MINUTES,
    INDEX_OF_DEFAULT, INDEX_OF_DISABLED,
    INDEX_OF_MINUTES,
    INDEX_OF_SECONDS,
    ONE_HUNDRED_PERCENT,
    ONE_SECOND,
    SECONDS_PER_MINUTE,
    ZERO
} from "../constant/number";
import {TIME_COUNTER_PAGE} from "../constant/page";
import Timer from "../component/Timer";
import {SOUND_MODE, STR_MINUTES, STR_SECONDS, TIME_FORMAT} from "../constant/string";

function TimeCounter() {

    const {
        totalSeconds,
        setHistoryPage,
        soundMode, getSound,
        showTimeline,
        showOvertime,
        countdown,
        timeFormat,
        isRunning, setIsRunning,
        timeRunning, setTimeRunning,
        scheduleTime, warningTime, urgentTime, dangerTime
    } = useContext(TimerContextHolder);

    const [hours, setHours] = useState(ZERO);
    const [minutes, setMinutes] = useState(ZERO);
    const [seconds, setSeconds] = useState(ZERO);
    const [textColor, setTextColor] = useState("text-green");
    const [soundChimes] = useSound(chimesSound);
    const percentData = getPercentData(scheduleTime, warningTime, urgentTime, dangerTime);


    useEffect(() => {
        setHistoryPage(TIME_COUNTER_PAGE);
        changeStyleTextColor(timeRunning);
        if (countdown && timeRunning <= totalSeconds) {
            setTimeByCountDownMode(timeRunning);
        } else {
            const _timeRunning = timeRunning > totalSeconds ? timeRunning - totalSeconds : timeRunning;
            setTimeByCountUpMode(_timeRunning);
        }
        if (!isRunning) {
            setTextColor("text-white")
        }
    }, []);


    useLayoutEffect(() => {
        let timeCounter;
        if (isRunning) {
            timeCounter = setTimeout(() => {
                let _timeRunning = timeRunning + ONE_SECOND;
                setTimeRunning(_timeRunning);
                changeStyleTextColor(_timeRunning);
                if (_timeRunning === totalSeconds && soundMode !== SOUND_MODE[INDEX_OF_DISABLED]) {
                    soundChimes();
                }
                if (countdown && _timeRunning <= totalSeconds) {
                    setTimeByCountDownMode(_timeRunning);
                } else {
                    _timeRunning = _timeRunning > totalSeconds ? _timeRunning - totalSeconds : _timeRunning;
                    setTimeByCountUpMode(_timeRunning);
                }
                getSound();
            }, 1000);
            if ((timeRunning >= totalSeconds && !showOvertime) || (timeRunning >= totalSeconds + FIFTEEN_MINUTES)) {
                clearTimeout(timeCounter);
            }
        }
        return () => {
            clearTimeout(timeCounter);
        }
    }, [timeRunning, isRunning]);


    const setTimeByDefaultFormat = (timeData) => {
        setHours(timeData.hours);
        setMinutes(timeData.minutes);
        setSeconds(timeData.seconds);
    }


    const setTimeByCountUpMode = (timeRunning) => {
        switch (timeFormat) {
            case TIME_FORMAT[INDEX_OF_MINUTES] :
                setMinutes(Math.floor(timeRunning / SECONDS_PER_MINUTE));
                break;
            case TIME_FORMAT[INDEX_OF_SECONDS] :
                setSeconds(timeRunning);
                break;
            default :
                const timeData = getTimeData(timeRunning);
                setTimeByDefaultFormat(timeData);
        }
    }


    const setTimeByCountDownMode = (timeRunning) => {
        const timeRemaining = totalSeconds - timeRunning;
        switch (timeFormat) {
            case TIME_FORMAT[INDEX_OF_MINUTES] :
                setMinutes(Math.ceil(timeRemaining / SECONDS_PER_MINUTE));
                break;
            case TIME_FORMAT[INDEX_OF_SECONDS] :
                setSeconds(timeRemaining);
                break;
            default :
                const timeData = getTimeData(timeRemaining);
                setTimeByDefaultFormat(timeData);
        }
    }

    const changeStyleTextColor = (timeRunning) => {
        const percent = getPercent(timeRunning, totalSeconds);
        if (percent < percentData.freeTime) {
            setTextColor("text-green");
        } else if (percent < percentData.freeTime + percentData.warningTime) {
            setTextColor("text-yellow");
        } else if (percent < percentData.freeTime + percentData.warningTime + percentData.urgentTime) {
            setTextColor("text-orange");
        } else if (percent < ONE_HUNDRED_PERCENT) {
            setTextColor("text-red");
        } else if (percent >= ONE_HUNDRED_PERCENT && showOvertime) {
            setTextColor("text-pink");
        } else {
            setTextColor("text-white");
        }
    }


    const handleClickResumeCountingTime = () => {
        changeStyleTextColor(timeRunning);
        setIsRunning(true);
    };


    const handleClickPauseCountingTime = () => {
        setTextColor("text-white")
        setIsRunning(false);
    };


    return (
        <div className={"col-12 col-md-10"}>
            <div className={`m-3 d-flex justify-content-center align-items-center fw-bold ${textColor}`}
                 style={{fontSize: "10rem"}}
            >
                {
                    timeFormat === TIME_FORMAT[INDEX_OF_DEFAULT] &&
                    <Timer hours={hours} minutes={minutes} seconds={seconds}/>
                }
                {
                    timeFormat === TIME_FORMAT[INDEX_OF_MINUTES] &&
                    <div className={"d-flex flex-column"}>
                        <span className={"d-flex justify-content-center"} style={{marginBottom: "-3rem"}}>
                            {minutes}
                        </span>
                        <span className={"fw-normal text-grey d-flex justify-content-center"} style={{fontSize: "4rem"}}>
                            {STR_MINUTES}
                        </span>
                    </div>
                }
                {
                    timeFormat === TIME_FORMAT[INDEX_OF_SECONDS] &&
                    <div className={"d-flex flex-column"}>
                        <span className={"d-flex justify-content-center"} style={{marginBottom: "-3rem"}}>
                            {seconds}
                        </span>
                        <span className={"fw-normal text-grey d-flex justify-content-center"} style={{fontSize: "4rem"}}>
                            {STR_SECONDS}
                        </span>
                    </div>
                }
            </div>
            <div className={"mt-3"}>
                {showTimeline && <ProgressBar timeRunning={timeRunning}/>}
            </div>
            <ControlBar
                onClickStartCountingTime={handleClickResumeCountingTime}
                onClickPauseCountingTime={handleClickPauseCountingTime}
                isRunning={isRunning}
            />
        </div>
    );
}

export default TimeCounter;