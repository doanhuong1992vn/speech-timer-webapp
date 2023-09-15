import React from 'react';
import {AiTwotoneSetting} from "react-icons/ai";
import {BsFillPlayFill} from "react-icons/bs";
import {MdReplay} from "react-icons/md";
import {useNavigate} from "react-router-dom";
import {HOME_PAGE, OPTION_SETTING_PAGE} from "../constant/page";

function ControlBar({onClickStartCountingTime, availableToSetting}) {

    const navigate = useNavigate();

    const handleClickSettingOption = () => {
        if (availableToSetting) {
            navigate(OPTION_SETTING_PAGE);
        }
    }

    const handleClickStartCountingTime = () => {
        onClickStartCountingTime();
    }

    const handleClickBackToHomePage = () => {
        navigate(HOME_PAGE);
    }

    return (
        <div  className={"mt-5 d-flex justify-content-evenly"}>
            <div>
                <AiTwotoneSetting
                    color={availableToSetting ? "white" : "grey"}
                    size={50}
                    onClick={handleClickSettingOption}
                    className={`${availableToSetting && 'cursor-pointer'}`}
                />
            </div>
            <div>
                <BsFillPlayFill
                    color={"white"}
                    size={50}
                    onClick={handleClickStartCountingTime}
                    className={"cursor-pointer"}
                />
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