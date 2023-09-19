import {useContext} from 'react';
import {AiFillCloseCircle} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import {HOME_PAGE} from "../constant/page";
import TimerContextHolder from "./TimerContextHolder";

function Header({content}) {


    const navigate = useNavigate();
    const {getSound} = useContext(TimerContextHolder);

    const handleClickClose = () => {
        getSound();
        navigate(HOME_PAGE);
    }

    return (
        <div className={"d-flex justify-content-between align-items-center p-2"}>
            <span className={"h2"}>{content}</span>
            <AiFillCloseCircle className={"cursor-pointer tag-hover-large"} size={50} onClick={handleClickClose}/>
        </div>
    );
}

export default Header;