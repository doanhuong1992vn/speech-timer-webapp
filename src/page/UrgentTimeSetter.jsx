import {useContext} from 'react';
import TimeSetter from "../component/TimeSetter";
import Header from "../component/Header";
import TimerContextHolder from "../component/TimerContextHolder";
import {createTime} from "../utils/timeService";
import {ZERO} from "../constant/number";

function UrgentTimeSetter() {

    const {urgentTime, setUrgentTime} = useContext(TimerContextHolder);

    const handleClickIncreaseTime = (type, time) => {
        const _urgentTime = {...urgentTime};
        _urgentTime[type] = time;
        setUrgentTime(_urgentTime);
    };

    const handleClickDecreaseTime = (type, time) => {
        const _urgentTime = {...urgentTime};
        _urgentTime[type] = time;
        setUrgentTime(_urgentTime);
    };

    const handleClickResetTime = () => {
        const _urgentTime = createTime(ZERO, ZERO, ZERO);
        setUrgentTime(_urgentTime);
    };

    return (
        <div className={"col-12 col-md-10 text-white fw-bold"}>
            <Header content={"set urgent time"} />
            <TimeSetter
                hours={urgentTime?.hours}
                minutes={urgentTime?.minutes}
                seconds={urgentTime?.seconds}
                onClickIncreaseTime={handleClickIncreaseTime}
                onClickDecreaseTime={handleClickDecreaseTime}
                onClickResetTime={handleClickResetTime}
            />
        </div>
    );
}

export default UrgentTimeSetter;