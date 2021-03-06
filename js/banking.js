//for getting values
const getValue = (inputId, isInput) => {
    const inputField = document.getElementById(inputId);
    if(isInput == true) {
        let value = parseFloat(inputField.value);
        inputField.value = '';
        return value;
    }
    else return parseFloat(inputField.innerText);
}

const updateField = (fieldId, value) => document.getElementById(fieldId).innerText = value;

//for updating Field value
const calculateBankFinance = (inputAmount, isWithdraw) => {
    const balance = getValue('balance-field', false);
    if(isWithdraw == true){
        if(inputAmount > 0 && inputAmount < balance ) {
            const prevWdroAmount = getValue('withdraw-field', false);
            updateField('balance-field', balance - inputAmount);
            updateField('withdraw-field', prevWdroAmount + inputAmount);
        } else alert('Withdraw Failed')
    } 
    else {
        if(inputAmount > 0) {
            const prevDepoAmount = getValue('deposit-field', false);
            updateField('balance-field', balance + inputAmount);
            updateField('deposit-field', prevDepoAmount + inputAmount);
        } else alert('Deposit Failed')
    }
}

//Deposit Handler
const depositButton = document.getElementById('deposit-btn');
depositButton.onclick = () => {
    const depositAmount = getValue('deposit-input', true);
    calculateBankFinance(depositAmount, false);
}

//Withdraw Handler
const withdrawButton = document.getElementById('withdraw-btn');
withdrawButton.onclick = () => {
    const withdrawAmount = getValue('withdraw-input', true);
    calculateBankFinance(withdrawAmount, true);
}