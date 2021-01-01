const updatePlates = (state, action) => {
    if (action.payload.isChecked) {
        return {
            ...state,
            plates: [...state.plates, action.payload.inputValue]
        };
    } else {
        return {
            ...state,
            plates: state.plates.filter((item) => item !== action.payload.inputValue)
        };
    }
}

const updateDesserts = (state, action) => {
    if (action.payload.isChecked) {
        return {
            ...state,
            desserts: [...state.desserts, action.payload.inputValue]
        };
    } else {
        return {
            ...state,
            desserts: state.desserts.filter((item) => item !== action.payload.inputValue)
        };
    }
}

const updateFruits = (state, action) => {
    if (action.payload.isChecked) {
        return { 
            ...state,
            fruits: [...state.fruits, action.payload.inputValue]
        }; 
    } else {
        return {
            ...state,
            fruits: state.fruits.filter((item) => item !== action.payload.inputValue)
        };
    } 
}

const updateValuesByName = (state, action) => {
    switch (action.payload.inputName) {
        case 'plate':
            return updatePlates(state, action);
        case 'dessert':
            return updateDesserts(state, action);
        case 'drink':
            return {
                ...state,
                'drinks': action.payload.inputValue
            }
        case 'fruit':
            return updateFruits(state, action);
        default:
            return {
                ...state
            };
    }
};

const checkboxValuesReducer = (state, action) => {
    switch (action.type) {
        case 'CHECKBOXCHANGE':
            return updateValuesByName(state, action);
        default:
            return {
                ...state
            };
    }
};

export default checkboxValuesReducer;