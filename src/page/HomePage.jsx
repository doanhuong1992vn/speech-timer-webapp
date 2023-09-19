import {useCallback, useContext, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import ProgressBar from "../component/ProgressBar";
import ControlBar from "../component/ControlBar";
import {
    DANGER_TIME_SETTER_PAGE,
    HOME_PAGE,
    SCHEDULE_TIME_SETTER_PAGE,
    TIME_COUNTER_PAGE,
    URGENT_TIME_SETTER_PAGE,
    WARNING_TIME_SETTER_PAGE
} from "../constant/page";
import TimerContextHolder from "../component/TimerContextHolder";
import {ZERO} from "../constant/number";
import Timer from "../component/Timer";

function HomePage() {

    const navigate = useNavigate();
    const {
        scheduleTime, warningTime, urgentTime, dangerTime,
        setHistoryPage, showTimeline, setIsRunning, setTimeRunning, getSound
    } = useContext(TimerContextHolder);

    useEffect(() => {
        setTimeRunning(ZERO);
        setHistoryPage(HOME_PAGE);
    }, []);


    const handleClickSetScheduleTime = () => {
        getSound();
        navigate(SCHEDULE_TIME_SETTER_PAGE);
    }

    const handleClickSetWarningTime = () => {
        getSound();
        navigate(WARNING_TIME_SETTER_PAGE);
    }

    const handleClickSetUrgentTime = () => {
        getSound();
        navigate(URGENT_TIME_SETTER_PAGE);
    }

    const handleClickSetDangerTime = () => {
        getSound();
        navigate(DANGER_TIME_SETTER_PAGE);
    }

    const handleClickStartCountingTime = useCallback(() => {
        setIsRunning(true);
        navigate(TIME_COUNTER_PAGE);
    }, []);


    return (
        <div className={"col-12 col-md-10"}>
            <div
                className={"m-3 d-flex justify-content-center align-items-center" +
                    " fw-bold bg-grey-btn text-white cursor-pointer tag-hover-normal"}
                style={{height: "30vh", fontSize: "10vw"}}
                onClick={handleClickSetScheduleTime}
            >
                <Timer
                    hours={scheduleTime?.hours}
                    minutes={scheduleTime?.minutes}
                    seconds={scheduleTime?.seconds}
                />
            </div>

            <div className={"d-flex justify-content-between ms-3 me-3"} style={{height: "20vh"}}>
                <div
                    className={"bg-grey-btn w-30 align-items-center d-flex justify-content-center " +
                        "fw-bold h3 text-yellow cursor-pointer tag-hover-normal"}
                    onClick={handleClickSetWarningTime}
                >
                    <Timer
                        hours={warningTime?.hours}
                        minutes={warningTime?.minutes}
                        seconds={warningTime?.seconds}
                        setting={true}
                    />
                </div>

                <div
                    className={"bg-grey-btn w-30 align-items-center d-flex justify-content-center" +
                        " fw-bold h3 text-orange cursor-pointer tag-hover-normal"}
                    onClick={handleClickSetUrgentTime}
                >
                    <Timer
                        hours={urgentTime?.hours}
                        minutes={urgentTime?.minutes}
                        seconds={urgentTime?.seconds}
                        setting={true}
                    />
                </div>

                <div
                    className={"bg-grey-btn w-30 align-items-center d-flex justify-content-center " +
                        "fw-bold h3 text-red cursor-pointer tag-hover-normal"}
                    onClick={handleClickSetDangerTime}
                >
                    <Timer
                        hours={dangerTime?.hours}
                        minutes={dangerTime?.minutes}
                        seconds={dangerTime?.seconds}
                        setting={true}
                    />
                </div>
            </div>
            {showTimeline && <ProgressBar timeRunning={ZERO}/>}
            <ControlBar
                onClickStartCountingTime={handleClickStartCountingTime}
                isRunning={false}
            />
        </div>
    );
}

export default HomePage;