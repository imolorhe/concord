
export const GET_QUESTION_REQUESTED = Symbol('GET_QUESTION_REQUESTED');
export const GET_QUESTION_SUCCESS = Symbol('GET_QUESTION_SUCCESS');
export const IS_LOADING = Symbol('IS_LOADING');
export const ADD_TO_SCORE_HISTORY = Symbol('ADD_TO_SCORE_HISTORY');
export const SELECT_ANSWER = Symbol('SELECT_ANSWER');
export const SHOW_CORRECT_ANSWER = Symbol('SHOW_CORRECT_ANSWER');

export function getQuestion() {
    return {
        type: GET_QUESTION_REQUESTED
    };
}

export function getQuestionSuccess(question) {
    return {
        type: GET_QUESTION_SUCCESS,
        question
    };
}

export function isLoading(bool) {
    return {
        type: IS_LOADING,
        isLoading: bool
    };
}

export function addToScoreHistory(question, answers, isCorrectAnswer, correctAnswerId, selectedAnswerId) {
    return {
        type: ADD_TO_SCORE_HISTORY,
        scoreHistoryItem: {
            question,
            answers,
            isCorrectAnswer,
            correctAnswerId,
            selectedAnswerId
        }
    }
}

export function newQuestion() {
    return dispatch => {
        dispatch(getQuestion());
    };
}

export function selectAnswer(answer) {
    return {
        type: SELECT_ANSWER,
        answer
    };
}

export function showCorrectAnswer() {
    return {
        type: SHOW_CORRECT_ANSWER
    };
}
