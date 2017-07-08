import {
    IS_LOADING,
    SELECT_ANSWER,
    GET_QUESTION_SUCCESS,
    ADD_TO_SCORE_HISTORY
} from '../actions/questions';

const initialState = {
    curQuestion: {},
    selectedAnswer: 1,
    questions: [],
    isLoading: false,
    scoreHistory: [
        // {
        //     question: '',
        //     answers: {},
        //     isCorrectAnswer: false,
        //     correctAnswerId: null,
        //     selectedAnswerId: null
        // }
    ]
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
        case ADD_TO_SCORE_HISTORY:
            return {
                ...state,
                scoreHistory: [
                    ...state.scoreHistory,
                    action.scoreHistoryItem
                ]
            };
            break;
        default:
            return state;
    }
}
