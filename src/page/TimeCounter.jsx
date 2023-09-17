import {useCallback, useContext, useEffect, useState} from 'react';
import ProgressBar from "../component/ProgressBar";
import ControlBar from "../component/ControlBar";
import {useNavigate} from "react-router-dom";
import TimerContext from "../component/TimerContext";
import {formatTime, getTimeData} from "../utils/timeService";
import {ZERO} from "../constant/number";
import {TIME_COUNTER_PAGE} from "../constant/page";

function TimeCounter() {

    const navigate = useNavigate();
    const {totalSeconds, setTotalSeconds, setHistoryPage} = useContext(TimerContext);
    const [hours, setHours] = useState(ZERO);
    const [minutes, setMinutes] = useState(ZERO);
    const [seconds, setSeconds] = useState(ZERO);
    const [timeRunning, setTimeRunning] = useState(ZERO);

    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        setHistoryPage(TIME_COUNTER_PAGE);
        const timeData = getTimeData(totalSeconds);
        setHours(timeData.hours);
        setMinutes(timeData.minutes);
        setSeconds(timeData.seconds);
    }, []);

    useEffect(() => {
        let timeCounter;
        if (isRunning) {
            timeCounter = setTimeout(() => {
                if (seconds === ZERO) {
                    setSeconds(59);
                    if (minutes === ZERO) {
                        setMinutes(59);
                        setHours(hours => hours - 1);
                    } else {
                        setMinutes(minutes => minutes - 1);
                    }
                } else {
                    setSeconds(seconds => seconds - 1);
                }
                setTimeRunning(timeRunning + 1);
            }, 1000);
            if (hours === ZERO && minutes === ZERO && seconds === ZERO) {
                clearTimeout(timeCounter);
            }
        }
        return () => {
            clearTimeout(timeCounter);
        }
    }, [hours, minutes, seconds, isRunning]);

    const handleClickResumeCountingTime = useCallback(() => {
        setIsRunning(true);
    }, []);

    const handleClickPauseCountingTime = useCallback(() => {
        setIsRunning(false);
    }, []);

    return (
        <div className={"col-12 col-md-10"}>
            <div className={"m-3 d-flex justify-content-center align-items-center fw-bold text-green"}
                 style={{height: "30vh", fontSize: "10rem"}}
            >
                <span className={"me-2"}>{formatTime(minutes)}</span>:
                <span className={"ms-2"}>{formatTime(seconds)}</span>
            </div>
            <ProgressBar timeRunning={timeRunning} />
            <ControlBar
                onClickStartCountingTime={handleClickResumeCountingTime}
                onClickPauseCountingTime={handleClickPauseCountingTime}
                isRunning={isRunning}
            />
        </div>
    );
}

export default TimeCounter;