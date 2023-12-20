
import { INCREMENT, DECREMENT, HANDLE } from './type';


export const increaseCounter = () => {

    return {

        type: INCREMENT,

    };

};

export const decreaseCounter = () => {

    return {

        type: DECREMENT,

    };

};

export const handle = () => {

    return {

        type: HANDLE,
        payload: { count: 100 }

    };

};