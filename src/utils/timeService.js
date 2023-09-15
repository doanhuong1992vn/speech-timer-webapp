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