import React from 'react';
import {BsTriangleFill} from "react-icons/bs";

function ProgressBar() {
    return (
        <div className={"position-relative mt-2 ms-3 me-3"}>
            <div className="progress" style={{height: 30}}>
                <div className="progress-bar bg-green"
                     role="progressbar"
                     style={{width: "25%"}}
                     aria-valuenow="25"
                     aria-valuemin="0"
                     aria-valuemax="100">
                </div>
                <div className="progress-bar bg-yellow"
                     role="progressbar"
                     style={{width: "25%"}}
                     aria-valuenow="25"
                     aria-valuemin="0"
                     aria-valuemax="100">
                </div>
                <div className="progress-bar bg-orange"
                     role="progressbar"
                     style={{width: "25%"}}
                     aria-valuenow="25"
                     aria-valuemin="0"
                     aria-valuemax="100">
                </div>
                <div className="progress-bar bg-red"
                     role="progressbar"
                     style={{width: "25%"}}
                     aria-valuenow="25"
                     aria-valuemin="0"
                     aria-valuemax="100">
                </div>
            </div>
            <div style={{position: "absolute", bottom: -21, left: -9, zIndex: 1}}>
                <BsTriangleFill color="white" size={20}/>
            </div>
        </div>
    );
}

export default ProgressBar;