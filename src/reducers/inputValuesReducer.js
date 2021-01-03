const updateValuesById = (state, action) => {
    switch (action.payload.inputId) {
        case 'fName':
            return {
                ...state,
                'fName': action.payload.inputValue
            };
        case 'lName':
            return {
                ...state,
                'lName': action.payload.inputValue
            };
        case 'dOfBirth':
            return {
                ...state,
                'dOfBirth': action.payload.inputValue
            };
        case 'eMail':
            return {
                ...state,
                'eMail': action.payload.inputValue
            };
        case 'telNum':
            return {
                ...state,
                'telNum': action.payload.inputValue
            };
        case 'country':
            return {
                ...state,
                'country': action.payload.inputValue
            };
        case 'perfectMeal':
            return {
                ...state,
                'perfectMeal': action.payload.inputValue
            };
        default:
            return {
                ...state
            };
    }
};

const inputValuesReducer = (state, action) => {
    switch (action.type) {
        case 'VALUECHANGE':
            return updateValuesById(state, action);
        default:
            return {
                ...state
            };
    }
};

export default inputValuesReducer;