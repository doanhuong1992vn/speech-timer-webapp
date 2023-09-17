import React, {useContext} from 'react';
import {AiFillCloseCircle} from "react-icons/ai";
import {BsTriangleFill} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import {HOME_PAGE} from "../constant/page";
import TimerContext from "../component/TimerContext";

function OptionSetting() {

    const navigate = useNavigate();
    const {historyPage} = useContext(TimerContext);

    const handleClickClose = () => {
        navigate(historyPage);
    }
    return (
        <div className={"col-12 col-md-10 text-white fw-bold"}>
            <div className={"d-flex justify-content-between align-items-center p-2 border-bottom rounded"}>
                <span className={"h2"}>options</span>
                <AiFillCloseCircle className={"cursor-pointer"} size={50} onClick={handleClickClose}/>
            </div>
            <div className={"h4 d-flex justify-content-center"}>
                <table className={"col-10 col-md-6 mt-3 mb-3"}>
                    <thead>
                    <tr>
                        <td className={"p-2"}>sound</td>
                        <td className={"p-2 cursor-pointer"}>disabled</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className={"p-2 "}>
                            <label className={"cursor-pointer"} htmlFor={"timeline-switch"}>timeline</label>
                        </td>
                        <td className={"p-2"}>
                            <label className="switch">
                                <input type="checkbox" id={"timeline-switch"}/>
                                <span className="slider round"></span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td className={"p-2"}>
                            <label className={"cursor-pointer"} htmlFor={"overtime-switch"}>overtime</label>
                        </td>
                        <td className={"p-2"}>
                            <label className="switch">
                                <input type="checkbox" id={"overtime-switch"}/>
                                <span className="slider round"></span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td className={"p-2"}>count mode</td>
                        <td className={"p-2 cursor-pointer"}>
                            <BsTriangleFill color="#4aca08" size={25} className={"ms-2"}/>
                        </td>
                    </tr>
                    <tr>
                        <td className={"p-2"}>time format</td>
                        <td className={"p-2 cursor-pointer"}><span>default</span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OptionSetting;