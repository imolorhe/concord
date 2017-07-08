import {
    IS_LOADING,
    SELECT_ANSWER,
    GET_QUESTION_SUCCESS
} from '../actions/questions';

const initialState = {
    curQuestion: {},
    selectedAnswer: 1,
    questions: [],
    isLoading: true,
    scoreHistory: []
};

export function questionReducer(state = initialState, action) {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
            break;
        case SELECT_ANSWER:
            return {
                ...state,
                selectedAnswer: action.answer
            };
            break;
        case GET_QUESTION_SUCCESS:
            return {
                ...state,
                curQuestion: action.question
            };
            break;
        default:
            return state;
    }
}