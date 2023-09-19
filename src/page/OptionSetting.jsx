import {useContext, useState} from 'react';
import {AiFillCloseCircle} from "react-icons/ai";
import {BsTriangleFill} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import {TbTriangleInvertedFilled} from "react-icons/tb";
import useSound from 'use-sound';
import clickSound from "../asset/sound/click.mp3";
import chimesSound from "../asset/sound/chimes.mp3";
import TimerContextHolder from "../component/TimerContextHolder";
import {COLOR_MODE, SOUND_MODE, TIME_FORMAT} from "../constant/string";
import {
    INDEX_OF_CHIMES_ONLY,
    INDEX_OF_DEFAULT,
    INDEX_OF_DISABLED,
    INDEX_OF_ENABLED,
    INDEX_OF_SECONDS
} from "../constant/number";

function OptionSetting() {

    const navigate = useNavigate();
    const {
        historyPage, getSound,
        soundMode, setSoundMode,
        showTimeline, setShowTimeline,
        showOvertime, setShowOvertime,
        countdown, setCountdown,
        timeFormat, setTimeFormat
    } = useContext(TimerContextHolder);
    const [soundClick] = useSound(clickSound);
    const [soundChimes] = useSound(chimesSound);
    const [textColor, setTextColor] = useState(COLOR_MODE[SOUND_MODE.indexOf(soundMode)]);

    const handleClickClose = () => {
        getSound();
        navigate(historyPage);
    }

    const handleChangeShowTimeline = () => {
        setShowTimeline(!showTimeline);
        getSound();
    }

    const handleChangeShowOvertime = () => {
        setShowOvertime(!showOvertime);
        getSound();
    }

    const handleClickChangeCountMode = () => {
        setCountdown(!countdown);
        getSound();
    }

    const handleClickChangeTimeFormat = () => {
        let index = TIME_FORMAT.indexOf(timeFormat);
        if (index === INDEX_OF_SECONDS) {
            setTimeFormat(TIME_FORMAT[INDEX_OF_DEFAULT])
        } else {
            setTimeFormat(TIME_FORMAT[++index]);
        }
        getSound();
    }

    const handleClickChangeSoundMode = () => {
        let index = SOUND_MODE.indexOf(soundMode);
        if (index === INDEX_OF_DISABLED) {
            soundClick();
            setSoundMode(SOUND_MODE[INDEX_OF_ENABLED]);
            setTextColor(COLOR_MODE[INDEX_OF_ENABLED]);
        } else if (index === INDEX_OF_ENABLED) {
            soundChimes();
            setSoundMode(SOUND_MODE[INDEX_OF_CHIMES_ONLY]);
            setTextColor(COLOR_MODE[INDEX_OF_CHIMES_ONLY]);
        } else {
            setSoundMode(SOUND_MODE[INDEX_OF_DISABLED]);
            setTextColor(COLOR_MODE[INDEX_OF_DISABLED]);
        }
    }

    return (
        <div className={"col-12 col-md-10 text-white fw-bold"}>
            <div className={"d-flex justify-content-between align-items-center p-2 border-bottom rounded"}>
                <span className={"h2"}>options</span>
                <AiFillCloseCircle className={"cursor-pointer tag-hover-large"} size={50} onClick={handleClickClose}/>
            </div>
            <div className={"h4 d-flex justify-content-center"}>
                <table className={"col-10 col-md-6 mt-3 mb-3"}>
                    <thead>
                    <tr style={{width: "100%"}}>
                        <td className={"p-2 tag-hover-normal"} width={"60%"}>
                            <span className={"cursor-pointer"} onClick={handleClickChangeSoundMode}>
                                sound
                            </span>
                        </td>
                        <td className={`p-2 tag-hover-normal ${textColor}`} width={"40%"}>
                            <span className={"cursor-pointer"} onClick={handleClickChangeSoundMode}>
                                {soundMode}
                            </span>
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className={"p-2  tag-hover-normal"}>
                            <label className={"cursor-pointer"} htmlFor={"timeline-switch"}>
                                timeline
                            </label>
                        </td>
                        <td className={"p-2 tag-hover-normal"}>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    id={"timeline-switch"}
                                    checked={showTimeline}
                                    onChange={handleChangeShowTimeline}
                                />
                                <span className="slider round"></span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td className={"p-2 tag-hover-normal"}>
                            <label className={"cursor-pointer"} htmlFor={"overtime-switch"}>
                                overtime
                            </label>
                        </td>
                        <td className={"p-2 tag-hover-normal"}>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    id={"overtime-switch"}
                                    checked={showOvertime}
                                    onChange={handleChangeShowOvertime}
                                />
                                <span className="slider round"></span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td className={"p-2 tag-hover-normal"}>
                            <span className={"cursor-pointer"} onClick={handleClickChangeCountMode}>
                                count mode
                            </span>
                        </td>
                        <td className={"p-2 tag-hover-large"}>
                            {
                                countdown
                                    ? <TbTriangleInvertedFilled
                                        color={"#fe7f00"}
                                        size={25}
                                        className={"ms-2 cursor-pointer"}
                                        onClick={handleClickChangeCountMode}
                                    />
                                    : <BsTriangleFill
                                        color={"#4aca08"}
                                        size={25}
                                        className={"ms-2 cursor-pointer"}
                                        onClick={handleClickChangeCountMode}
                                    />
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className={"p-2 tag-hover-normal"}>
                            <div className={"cursor-pointer"} onClick={handleClickChangeTimeFormat}>
                                time format
                            </div>
                        </td>
                        <td className={"p-2 tag-hover-normal"}>
                            <div className={"cursor-pointer"} onClick={handleClickChangeTimeFormat}>
                                {timeFormat}
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OptionSetting;