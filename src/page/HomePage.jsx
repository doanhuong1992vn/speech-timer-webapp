import React, {useCallback} from 'react';
import ProgressBar from "../component/ProgressBar";
import ControlBar from "../component/ControlBar";
import {useNavigate} from "react-router-dom";
import {
    DANGER_TIME_SETTER_PAGE,
    SCHEDULE_TIME_SETTER_PAGE,
    TIME_COUNTER_PAGE,
    URGENT_TIME_SETTER_PAGE,
    WARNING_TIME_SETTER_PAGE
} from "../constant/page";

function HomePage() {

    const navigate = useNavigate();

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
            <div className={"m-3 d-flex justify-content-center align-items-center fw-bold bg-grey-btn text-white"}
                 style={{height: "30vh", fontSize: "10rem"}}
                 onClick={handleClickSetScheduleTime}
            >
                <span className={"me-2"}>05</span>:<span className={"ms-2"}>00</span>
            </div>

            <div className={"d-flex justify-content-between ms-3 me-3"} style={{height: "20vh"}}>
                <div className={"bg-grey-btn w-30 align-items-center d-flex justify-content-center fw-bold h2 text-yellow"}
                     onClick={handleClickSetWarningTime}
                >
                    <span className={"me-1"}>01</span>:<span className={"ms-1"}>30</span>
                </div>

                <div className={"bg-grey-btn w-30 align-items-center d-flex justify-content-center fw-bold h2 text-orange"}
                     onClick={handleClickSetUrgentTime}
                >
                    <span className={"me-1"}>00</span>:<span className={"ms-1"}>45</span>
                </div>

                <div className={"bg-grey-btn w-30 align-items-center d-flex justify-content-center fw-bold h2 text-red"}
                     onClick={handleClickSetDangerTime}
                >
                    <span className={"me-1"}>00</span>:<span className={"ms-1"}>15</span>
                </div>
            </div>
            <ProgressBar />
            <ControlBar
                onClickStartCountingTime={handleClickStartCountingTime}
                availableToSetting={true}
            />
        </div>
    );
}

export default HomePage;