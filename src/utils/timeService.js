import {FIFTY_NINE, ONE, SIXTY, ZERO} from "../constant/number";

export const formatTime = (time) => {
    return `0${time}`.slice(-2);
};

export const createTime = (hours, minutes, seconds) => ({hours, minutes, seconds});

export const increaseTime = (time, number) => {
    const result = time + number;
    return result >= SIXTY ? result - SIXTY : result;
}

export const decreaseTime = (time, number) => {
    const result = time - number;
    return result < ZERO ? result + SIXTY : result;
}

export const getSeconds = ({hours, minutes, seconds}) => {
    return hours * 3600 + minutes * 60 + seconds;
}

export const getTimeData = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return {hours, minutes, seconds};
}

export const getPercent = (seconds, totalSeconds) => {
    let percent = seconds / totalSeconds * 100;
    if (percent > 100) {
        percent = 0;
    }
    return percent;
}

export const getPercentData = (scheduleTime, warningTime, urgentTime, dangerTime) => {
    let percentFreeTime,
        percentAfterFreeTime = 0,
        percentWarningTime = 0,
        percentAfterWarningTime = 0,
        percentUrgentTime = 0,
        percentDangerTime = 0;
    const totalSeconds = getSeconds(scheduleTime);
    const secondsOfWarningTime = getSeconds(warningTime);
    const secondsOfUrgentTime = getSeconds(urgentTime);
    const secondsOfDangerTime = getSeconds(dangerTime);
    if (secondsOfWarningTime < totalSeconds) {
        percentAfterFreeTime = getPercent(secondsOfWarningTime, totalSeconds);
        percentFreeTime = 100 - percentAfterFreeTime;
        if (secondsOfUrgentTime < secondsOfWarningTime) {
            percentAfterWarningTime = getPercent(secondsOfUrgentTime, secondsOfWarningTime);
            percentWarningTime = (100 - percentAfterWarningTime) * percentAfterFreeTime / 100;
            if (secondsOfDangerTime < secondsOfUrgentTime) {
                percentDangerTime = (getPercent(secondsOfDangerTime, secondsOfUrgentTime) * percentAfterWarningTime / 100) * percentAfterFreeTime / 100 ;
                percentUrgentTime = 100 - percentFreeTime - percentWarningTime - percentDangerTime;
            } else {
                percentUrgentTime = 100 - percentFreeTime - percentWarningTime;
            }
        } else if (secondsOfDangerTime < secondsOfWarningTime) {
            percentDangerTime = getPercent(secondsOfDangerTime, secondsOfWarningTime) * percentAfterFreeTime / 100;
            percentWarningTime = 100 - percentFreeTime - percentDangerTime;
        } else {
            percentWarningTime = percentAfterFreeTime;
        }
    } else if (secondsOfUrgentTime < totalSeconds) {
        percentAfterFreeTime = getPercent(secondsOfUrgentTime, totalSeconds);
        percentFreeTime = 100 - percentAfterFreeTime;
        if (secondsOfDangerTime < secondsOfUrgentTime) {
            percentDangerTime = getPercent(secondsOfDangerTime, secondsOfUrgentTime) * percentAfterFreeTime / 100;
            percentUrgentTime = 100 - percentFreeTime - percentDangerTime;
        } else {
            percentUrgentTime = percentAfterFreeTime;
        }
    } else if (secondsOfDangerTime < totalSeconds) {
        percentDangerTime = getPercent(secondsOfDangerTime, totalSeconds);
        percentFreeTime = 100 - percentDangerTime;
    } else {
        percentFreeTime = 100;
    }
    return {
        freeTime: percentFreeTime,
        warningTime: percentWarningTime,
        urgentTime: percentUrgentTime,
        dangerTime: percentDangerTime
    };
}