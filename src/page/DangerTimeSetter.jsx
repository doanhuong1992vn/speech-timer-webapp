import {useContext} from 'react';
import Header from "../component/Header";
import TimeSetter from "../component/TimeSetter";
import TimerContext from "../component/TimerContext";
import {createTime} from "../utils/timeService";
import {ZERO} from "../constant/number";

function DangerTimeSetter() {

    const {dangerTime, setDangerTime} = useContext(TimerContext);

    const handleClickIncreaseTime = (type, time) => {
        const _dangerTime = {...dangerTime};
        _dangerTime[type] = time;
        setDangerTime(_dangerTime);
    }

    const handleClickDecreaseTime = (type, time) => {
        const _dangerTime = {...dangerTime};
        _dangerTime[type] = time;
        setDangerTime(_dangerTime);
    }

    const handleClickResetTime = () => {
        const _dangerTime = createTime(ZERO, ZERO, ZERO);
        setDangerTime(_dangerTime);
    }

    return (
        <div className={"col-12 col-md-10 text-white fw-bold"}>
            <Header content={"set danger time"} />
            <TimeSetter
                hours={dangerTime.hours}
                minutes={dangerTime.minutes}
                seconds={dangerTime.seconds}
                onClickIncreaseTime={handleClickIncreaseTime}
                onClickDecreaseTime={handleClickDecreaseTime}
                onClickResetTime={handleClickResetTime}
            />
        </div>
    );
}

export default DangerTimeSetter;