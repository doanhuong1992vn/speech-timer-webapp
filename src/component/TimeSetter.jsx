import React from 'react';
import {BsTriangleFill} from "react-icons/bs";
import {VscTriangleDown, VscTriangleUp} from "react-icons/vsc";

function TimeSetter() {
    return (
        <div className={"mt-2"}>
            <div className={"d-flex justify-content-around border-bottom"}>
                <VscTriangleUp color="white" size={120}/>
                <VscTriangleUp color="white" size={120}/>
                <VscTriangleUp color="white" size={120}/>
            </div>
            <div className={"d-flex justify-content-evenly"} style={{fontSize: "7rem"}}>
                <span>00</span>:
                <span>00</span>:
                <span>00</span>
            </div>
            <div className={"d-flex justify-content-around border-top"}>
                <VscTriangleDown color="white" size={120}/>
                <VscTriangleDown color="white" size={120}/>
                <VscTriangleDown color="white" size={120}/>
            </div>
            <div className={"d-flex justify-content-around h4"}>
                <div className={"bg-red-btn ps-5 pe-5 pt-1 pb-1"}>00:00</div>
                <div className={"bg-grey-btn ps-5 pe-5 pt-1 pb-1"}>+ 05m</div>
                <div className={"bg-grey-btn ps-5 pe-5 pt-1 pb-1"}>+ 15s</div>
            </div>
        </div>
    );
}

export default TimeSetter;