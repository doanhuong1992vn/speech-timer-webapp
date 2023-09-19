import {useContext} from 'react';
import {AiTwotoneSetting} from "react-icons/ai";
import {BsFillPlayFill} from "react-icons/bs";
import {MdReplay} from "react-icons/md";
import {useNavigate} from "react-router-dom";
import {FaPause} from "react-icons/fa";
import {HOME_PAGE, OPTION_SETTING_PAGE} from "../constant/page";
import TimerContextHolder from "./TimerContextHolder";

function ControlBar({onClickStartCountingTime, isRunning, onClickPauseCountingTime}) {

    const navigate = useNavigate();
    const {getSound} = useContext(TimerContextHolder);

    const handleClickSettingOption = () => {
        if (!isRunning) {
            getSound();
            navigate(OPTION_SETTING_PAGE);
        }
    }

    const handleClickStartCountingTime = () => {
        getSound();
        onClickStartCountingTime();
    }

    const handleClickPauseCountingTime = () => {
        getSound();
        onClickPauseCountingTime();
    }

    const handleClickBackToHomePage = () => {
        getSound();
        navigate(HOME_PAGE);
    }

    return (
        <div className={"mt-5 d-flex justify-content-evenly"}>
            <div>
                <AiTwotoneSetting
                    color={isRunning ? "grey" : "white"}
                    size={50}
                    onClick={handleClickSettingOption}
                    className={`${!isRunning && 'cursor-pointer tag-hover-large'}`}
                />
            </div>
            <div>
                {
                    isRunning
                        ? <FaPause
                            color={"white"}
                            size={50}
                            className={"cursor-pointer tag-hover-large"}
                            onClick={handleClickPauseCountingTime}
                        />
                        : <BsFillPlayFill
                            color={"white"}
                            size={50}
                            onClick={handleClickStartCountingTime}
                            className={"cursor-pointer tag-hover-large"}
                        />
                }
            </div>
            <div>
                <MdReplay
                    color={"white"}
                    size={50}
                    className={"cursor-pointer tag-hover-large"}
                    onClick={handleClickBackToHomePage}
                />
            </div>
        </div>
    );
}

export default ControlBar;