import {
    HOURS_PER_DAY,
    ONE_HUNDRED_PERCENT,
    SECONDS_PER_HOURS,
    SECONDS_PER_MINUTE,
    SIXTY,
    ZERO
} from "../constant/number";
import {STR_HOURS} from "../constant/string";

export const formatTime = (time) => {
    return `0${time}`.slice(-2);
};

export const createTime = (hours, minutes, seconds) => ({hours, minutes, seconds});

export const increaseTime = (type, time, number) => {
    const result = time + number;
    if (type === STR_HOURS) {
        return result >= HOURS_PER_DAY ? result - HOURS_PER_DAY : result;
    } else {
        return result >= SIXTY ? result - SIXTY : result;
    }
}

export const decreaseTime = (type, time, number) => {
    const result = time - number;
    if (type === STR_HOURS) {
        return result < ZERO ? result + HOURS_PER_DAY : result;
    } else {
        return result < ZERO ? result + SIXTY : result;
    }
}

export const getSeconds = ({hours, minutes, seconds}) => {
    return hours * SECONDS_PER_HOURS + minutes * SECONDS_PER_MINUTE + seconds;
}

export const getTimeData = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / SECONDS_PER_HOURS);
    const minutes = Math.floor((totalSeconds % SECONDS_PER_HOURS) / SECONDS_PER_MINUTE);
    const seconds = totalSeconds % SECONDS_PER_MINUTE;
    return {hours, minutes, seconds};
}

export const getPercent = (seconds, totalSeconds) => {
    return seconds / totalSeconds * ONE_HUNDRED_PERCENT;
}

export const getPercentData = (scheduleTime, warningTime, urgentTime, dangerTime) => {
    let percentFreeTime,
        percentAfterFreeTime = ZERO,
        percentWarningTime = ZERO,
        percentAfterWarningTime = ZERO,
        percentUrgentTime = ZERO,
        percentDangerTime = ZERO;
    const totalSeconds = getSeconds(scheduleTime);
    const secondsOfWarningTime = getSeconds(warningTime);
    const secondsOfUrgentTime = getSeconds(urgentTime);
    const secondsOfDangerTime = getSeconds(dangerTime);
    if (secondsOfWarningTime < totalSeconds) {
        percentAfterFreeTime = getPercent(secondsOfWarningTime, totalSeconds);
        percentFreeTime = ONE_HUNDRED_PERCENT - percentAfterFreeTime;
        if (secondsOfUrgentTime < secondsOfWarningTime) {
            percentAfterWarningTime = getPercent(secondsOfUrgentTime, secondsOfWarningTime);
            percentWarningTime = (ONE_HUNDRED_PERCENT - percentAfterWarningTime) * percentAfterFreeTime / ONE_HUNDRED_PERCENT;
            if (secondsOfDangerTime < secondsOfUrgentTime) {
                percentDangerTime = (getPercent(secondsOfDangerTime, secondsOfUrgentTime) * percentAfterWarningTime / ONE_HUNDRED_PERCENT) * percentAfterFreeTime / ONE_HUNDRED_PERCENT ;
                percentUrgentTime = ONE_HUNDRED_PERCENT - percentFreeTime - percentWarningTime - percentDangerTime;
            } else {
                percentUrgentTime = ONE_HUNDRED_PERCENT - percentFreeTime - percentWarningTime;
            }
        } else if (secondsOfDangerTime < secondsOfWarningTime) {
            percentDangerTime = getPercent(secondsOfDangerTime, secondsOfWarningTime) * percentAfterFreeTime / ONE_HUNDRED_PERCENT;
            percentWarningTime = ONE_HUNDRED_PERCENT - percentFreeTime - percentDangerTime;
        } else {
            percentWarningTime = percentAfterFreeTime;
        }
    } else if (secondsOfUrgentTime < totalSeconds) {
        percentAfterFreeTime = getPercent(secondsOfUrgentTime, totalSeconds);
        percentFreeTime = ONE_HUNDRED_PERCENT - percentAfterFreeTime;
        if (secondsOfDangerTime < secondsOfUrgentTime) {
            percentDangerTime = getPercent(secondsOfDangerTime, secondsOfUrgentTime) * percentAfterFreeTime / ONE_HUNDRED_PERCENT;
            percentUrgentTime = ONE_HUNDRED_PERCENT - percentFreeTime - percentDangerTime;
        } else {
            percentUrgentTime = percentAfterFreeTime;
        }
    } else if (secondsOfDangerTime < totalSeconds) {
        percentDangerTime = getPercent(secondsOfDangerTime, totalSeconds);
        percentFreeTime = ONE_HUNDRED_PERCENT - percentDangerTime;
    } else {
        percentFreeTime = ONE_HUNDRED_PERCENT;
    }
    return {
        freeTime: percentFreeTime,
        warningTime: percentWarningTime,
        urgentTime: percentUrgentTime,
        dangerTime: percentDangerTime
    };
}

