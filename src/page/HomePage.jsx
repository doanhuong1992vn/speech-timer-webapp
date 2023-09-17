import React, {useCallback, useContext, useEffect} from 'react';
import ProgressBar from "../component/ProgressBar";
import ControlBar from "../component/ControlBar";
import {useNavigate} from "react-router-dom";
import {
    DANGER_TIME_SETTER_PAGE, HOME_PAGE,
    SCHEDULE_TIME_SETTER_PAGE,
    TIME_COUNTER_PAGE,
    URGENT_TIME_SETTER_PAGE,
    WARNING_TIME_SETTER_PAGE
} from "../constant/page";
import TimerContext from "../component/TimerContext";
import {formatTime} from "../utils/timeService";

function HomePage() {

    const navigate = useNavigate();
    const {scheduleTime, warningTime, urgentTime, dangerTime, setHistoryPage} = useContext(TimerContext);

    useEffect(() => {
        setHistoryPage(HOME_PAGE);
    }, []);


    const handleClickSetScheduleTime = () => {
        navigate(SCHEDULE_TIME_SETTER_PAGE);
    }

    const handleClickSetWarningTime = () => {
        navigate(WARNING_TIME_SETTER_PAGE);
    }

    const handleClickSetUrgentTime = () => {
        navigate(URGENT_TIME_SETTER_PAGE);
    }

    const handleClickSetDangerTime = () => {
        navigate(DANGER_TIME_SETTER_PAGE);
    }

    const handleClickStartCountingTime = useCallback(() => {
        navigate(TIME_COUNTER_PAGE);
    }, []);


    return (
        <div className={"col-12 col-md-10"}>
            <div className={"m-3 d-flex justify-content-center align-items-center fw-bold bg-grey-btn text-white cursor-pointer"}
                 style={{height: "30vh", fontSize: "10rem"}}
                 onClick={handleClickSetScheduleTime}
            >
                <span className={"me-2"}>{formatTime(scheduleTime.minutes)}</span>:
                <span className={"ms-2"}>{formatTime(scheduleTime.seconds)}</span>
            </div>

            <div className={"d-flex justify-content-between ms-3 me-3"} style={{height: "20vh"}}>
                <div className={"bg-grey-btn w-30 align-items-center d-flex justify-content-center fw-bold h2 text-yellow cursor-pointer"}
                     onClick={handleClickSetWarningTime}
                >
                    <span className={"me-1"}>{formatTime(warningTime.minutes)}</span>:
                    <span className={"ms-1"}>{formatTime(warningTime.seconds)}</span>
                </div>

                <div className={"bg-grey-btn w-30 align-items-center d-flex justify-content-center fw-bold h2 text-orange cursor-pointer"}
                     onClick={handleClickSetUrgentTime}
                >
                    <span className={"me-1"}>{formatTime(urgentTime.minutes)}</span>:
                    <span className={"ms-1"}>{formatTime(urgentTime.seconds)}</span>
                </div>

                <div className={"bg-grey-btn w-30 align-items-center d-flex justify-content-center fw-bold h2 text-red cursor-pointer"}
                     onClick={handleClickSetDangerTime}
                >
                    <span className={"me-1"}>{formatTime(dangerTime.minutes)}</span>:
                    <span className={"ms-1"}>{formatTime(dangerTime.seconds)}</span>
                </div>
            </div>
            <ProgressBar />
            <ControlBar
                onClickStartCountingTime={handleClickStartCountingTime}
                isRunning={false}
            />
        </div>
    );
}

export default HomePage;