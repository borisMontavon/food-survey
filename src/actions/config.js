export const valueChange = (inputId, inputValue) => {
    return {
        type: 'VALUECHANGE',
        payload: {
            inputId: inputId,
            inputValue: inputValue
        }
    };
};

export const checkboxChange = (inputName, inputValue, isChecked) => {
    return {
        type: 'CHECKBOXCHANGE',
        payload: {
            inputName: inputName,
            inputValue: inputValue,
            isChecked: isChecked
        }
    };
};