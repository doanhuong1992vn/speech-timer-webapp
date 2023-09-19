import {useContext, useEffect, useState} from 'react';
import {BsTriangleFill} from "react-icons/bs";
import TimerContextHolder from "./TimerContextHolder";
import {getPercent, getPercentData} from "../utils/timeService";
import {ONE_HUNDRED_PERCENT, ZERO} from "../constant/number";


function ProgressBar({timeRunning}) {

    const {scheduleTime, warningTime, urgentTime, dangerTime, totalSeconds} = useContext(TimerContextHolder);
    const percentData = getPercentData(scheduleTime, warningTime, urgentTime, dangerTime);
    const [range, setRange] = useState(ZERO);


    useEffect(() => {
        if (timeRunning) {
            const distance = document.getElementById("progress-bar").clientWidth;
            let percent = getPercent(timeRunning, totalSeconds);
            percent = percent > 100 ? ONE_HUNDRED_PERCENT : percent;
            const range = distance * percent / 100;
            setRange(range);
        }
    }, [timeRunning]);

    return (
        <div className={"position-relative mt-2 ms-3 me-3"}>
            <div className="progress" style={{height: 30, backgroundColor: "#101010"}} id={"progress-bar"}>
                <div className="progress-bar bg-green"
                     role="progressbar"
                     style={{width: `${percentData.freeTime}%`}}
                     aria-valuenow="25"
                     aria-valuemin="0"
                     aria-valuemax="100">
                </div>
                <div className="progress-bar bg-yellow"
                     role="progressbar"
                     style={{width: `${percentData.warningTime}%`}}
                     aria-valuenow="25"
                     aria-valuemin="0"
                     aria-valuemax="100">
                </div>
                <div className="progress-bar bg-orange"
                     role="progressbar"
                     style={{width: `${percentData.urgentTime}%`}}
                     aria-valuenow="25"
                     aria-valuemin="0"
                     aria-valuemax="100">
                </div>
                <div className="progress-bar bg-red"
                     role="progressbar"
                     style={{width: `${percentData.dangerTime}%`}}
                     aria-valuenow="25"
                     aria-valuemin="0"
                     aria-valuemax="100">
                </div>
            </div>
            <div style={{position: "absolute", bottom: -21, left: -10 + range, zIndex: 1, transition: "all linear 0.3s"}}>
                <BsTriangleFill color="white" size={20}/>
            </div>
        </div>
    );
}

export default ProgressBar;