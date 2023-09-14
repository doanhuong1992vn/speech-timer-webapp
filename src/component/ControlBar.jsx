import React from 'react';
import {AiTwotoneSetting} from "react-icons/ai";
import {BsFillPlayFill} from "react-icons/bs";
import {MdReplay} from "react-icons/md";

function ControlBar() {
    return (
        <div  className={"mt-5 d-flex justify-content-evenly"}>
            <div>
                <AiTwotoneSetting color={"white"} size={50}/>
            </div>
            <div>
                <BsFillPlayFill color={"white"} size={50}/>
            </div>
            <div>
                <MdReplay color={"white"} size={50} />
            </div>
        </div>
    );
}

export default ControlBar;