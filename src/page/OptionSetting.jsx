import React from 'react';
import {AiFillCloseCircle} from "react-icons/ai";
import {BsTriangleFill} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import {HOME_PAGE} from "../constant/page";

function OptionSetting() {

    const navigate = useNavigate();

    const handleClickClose = () => {
        navigate(HOME_PAGE);
    }
    return (
        <div className={"col-12 col-md-10 text-white fw-bold"}>
            <div className={"d-flex justify-content-between align-items-center p-2 border-bottom rounded"}>
                <span className={"h2"}>options</span>
                <AiFillCloseCircle className={""} size={50} onClick={handleClickClose}/>
            </div>
            <div className={"h4 d-flex justify-content-center"}>
                <table className={"col-10 col-md-6 mt-3 mb-3"}>
                    <tr>
                        <td className={"p-2"}>sound</td>
                        <td className={"p-2"}>disabled</td>
                    </tr>
                    <tr>
                        <td className={"p-2"}><label htmlFor={"timeline-switch"}>timeline</label></td>
                        <td className={"p-2"}>
                            <div className="form-check form-switch">
                                <input className="form-check-input"
                                       style={{backgroundColor: "#4aca08"}}
                                       type="checkbox"
                                       role="switch"
                                       id="timeline-switch" checked />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={"p-2"}><label htmlFor={"overtime-switch"}>overtime</label></td>
                        <td className={"p-2"}>
                            <div className="form-check form-switch">
                                <input className="form-check-input"
                                       // style={{backgroundColor: "#4aca08"}}
                                       type="checkbox"
                                       role="switch"
                                       id="overtime-switch" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={"p-2"}>count mode</td>
                        <td className={"p-2"}><BsTriangleFill color="#4aca08" size={20} className={"ms-2"}/></td>
                    </tr>
                    <tr>
                        <td className={"p-2"}>time format</td>
                        <td className={"p-2"}><span>default</span></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default OptionSetting;