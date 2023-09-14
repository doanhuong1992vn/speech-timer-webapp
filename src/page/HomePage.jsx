import React, {useCallback} from 'react';
import ProgressBar from "../component/ProgressBar";
import ControlBar from "../component/ControlBar";
import {useNavigate} from "react-router-dom";
import {TIME_COUNTER_PAGE} from "../constant/page";

function HomePage() {

    const navigate = useNavigate();

    const handleClickStartCountingTime = useCallback(() => {
        navigate(TIME_COUNTER_PAGE);
    }, []);

    return (
        <div className={"col-12 col-md-10"}>
            <div className={"m-3 d-flex justify-content-center align-items-center fw-bold bg-grey-btn text-white"}
                 style={{height: "30vh", fontSize: "10rem"}}
            >
                <span className={"me-2"}>05</span>:<span className={"ms-2"}>00</span>
            </div>
            <div className={"d-flex justify-content-between ms-3 me-3"} style={{height: "20vh"}}>
                <div className={"bg-grey-btn w-30 align-items-center d-flex justify-content-center fw-bold h2 text-yellow"}>
                    <span className={"me-1"}>01</span>:<span className={"ms-1"}>30</span>
                </div>
                <div className={"bg-grey-btn w-30 align-items-center d-flex justify-content-center fw-bold h2 text-orange"}>
                    <span className={"me-1"}>00</span>:<span className={"ms-1"}>45</span>
                </div>
                <div className={"bg-grey-btn w-30 align-items-center d-flex justify-content-center fw-bold h2 text-red"}>
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