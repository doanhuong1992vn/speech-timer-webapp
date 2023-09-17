import React, {useContext} from 'react';
import {AiTwotoneSetting} from "react-icons/ai";
import {BsFillPlayFill} from "react-icons/bs";
import {MdReplay} from "react-icons/md";
import {useNavigate} from "react-router-dom";
import {HOME_PAGE, OPTION_SETTING_PAGE} from "../constant/page";
import {FaPause} from "react-icons/fa";
import TimerContext from "./TimerContext";

function ControlBar({onClickStartCountingTime, isRunning, onClickPauseCountingTime}) {

    const navigate = useNavigate();

    const handleClickSettingOption = () => {
        if (!isRunning) {
            navigate(OPTION_SETTING_PAGE);
        }
    }

    const handleClickStartCountingTime = () => {
        onClickStartCountingTime();
    }

    const handleClickPauseCountingTime = () => {
        onClickPauseCountingTime();
    }

    const handleClickBackToHomePage = () => {
        navigate(HOME_PAGE);
    }

    return (
        <div className={"mt-5 d-flex justify-content-evenly"}>
            <div>
                <AiTwotoneSetting
                    color={isRunning ? "grey" : "white"}
                    size={50}
                    onClick={handleClickSettingOption}
                    className={`${!isRunning && 'cursor-pointer'}`}
                />
            </div>
            <div>
                {
                    isRunning
                        ? <FaPause
                            color={"white"}
                            size={50}
                            className={"cursor-pointer"}
                            onClick={handleClickPauseCountingTime}
                        />
                        : <BsFillPlayFill
                            color={"white"}
                            size={50}
                            onClick={handleClickStartCountingTime}
                            className={"cursor-pointer"}
                        />
                }
            </div>
            <div>
                <MdReplay
                    color={"white"}
                    size={50}
                    className={"cursor-pointer"}
                    onClick={handleClickBackToHomePage}
                />
            </div>
        </div>
    );
}

export default ControlBar;