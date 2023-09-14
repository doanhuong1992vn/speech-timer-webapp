import React, {useCallback, useState} from 'react';
import ProgressBar from "../component/ProgressBar";
import ControlBar from "../component/ControlBar";
import {useNavigate} from "react-router-dom";

function TimeCounter() {

    const navigate = useNavigate();
    const [isPause, setIsPause] = useState(false);

    const handleClickResumeCountingTime = useCallback(() => {

    }, []);

    return (
        <div className={"col-12 col-md-10"}>
            <div className={"m-3 d-flex justify-content-center align-items-center fw-bold text-green"}
                 style={{height: "30vh", fontSize: "10rem"}}
            >
                <span className={"me-2"}>05</span>:<span className={"ms-2"}>00</span>
            </div>
            <ProgressBar />
            <ControlBar
                onClickStartCountingTime={handleClickResumeCountingTime}
                availableToSetting={isPause}
            />
        </div>
    );
}

export default TimeCounter;