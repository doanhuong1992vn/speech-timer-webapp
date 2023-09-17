import {useContext} from 'react';
import Header from "../component/Header";
import TimeSetter from "../component/TimeSetter";
import TimerContext from "../component/TimerContext";
import {createTime} from "../utils/timeService";
import {ZERO} from "../constant/number";

function WarningTimeSetter() {

    const {warningTime, setWarningTime} = useContext(TimerContext);

    const handleClickIncreaseTime = (type, time) => {
        const _warningTime = {...warningTime};
        _warningTime[type] = time;
        setWarningTime(_warningTime);
    }

    const handleClickDecreaseTime = (type, time) => {
        const _warningTime = {...warningTime};
        _warningTime[type] = time;
        setWarningTime(_warningTime);
    }

    const handleClickResetTime = () => {
        const _warningTime = createTime(ZERO, ZERO, ZERO);
        setWarningTime(_warningTime);
    }

    return (
        <div className={"col-12 col-md-10 text-white fw-bold"}>
            <Header content={"set warning time"} />
            <TimeSetter
                hours={warningTime.hours}
                minutes={warningTime.minutes}
                seconds={warningTime.seconds}
                onClickIncreaseTime={handleClickIncreaseTime}
                onClickDecreaseTime={handleClickDecreaseTime}
                onClickResetTime={handleClickResetTime}
            />
        </div>
    );
}

export default WarningTimeSetter;