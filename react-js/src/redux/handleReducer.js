import { HANDLE } from './actions/type';

const INITIAL_STATE = {

    ca: 0,
};


const handleReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HANDLE:
            return {
                ...state, ca: state.ca + 1,
            }
        default: return state;
    }
}

export default handleReducer;