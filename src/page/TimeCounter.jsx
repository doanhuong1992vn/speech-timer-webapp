import React from 'react';
import ProgressBar from "../component/ProgressBar";
import ControlBar from "../component/ControlBar";

function TimeCounter() {
    return (
        <div className={"col-12 col-md-10"}>
            <div className={"m-3 d-flex justify-content-center align-items-center fw-bold text-green"}
                 style={{height: "30vh", fontSize: "10rem"}}
            >
                <span className={"me-2"}>05</span>:<span className={"ms-2"}>00</span>
            </div>
            <ProgressBar />
            <ControlBar />
        </div>
    );
}

export default TimeCounter;