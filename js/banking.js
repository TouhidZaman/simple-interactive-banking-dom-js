//Deposit Handler
const depositButton = document.getElementById('deposit-btn');

depositButton.onclick = function () {
    //Getting Deposit amount
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = parseFloat(depositInput.value);

    //Getting previous Deposit amount
    const depositDisplayField = document.getElementById('deposit-field');
    const prevDepoAmount = parseFloat(depositDisplayField.innerText);
    
    //Getting previous Total Balence
    const balanceDisplayField = document.getElementById('balance-field');
    const prevBalance = parseFloat(balanceDisplayField.innerText);

    //Updating Total Deposit and Total Balence
    if(depositAmount > 0) {
        depositDisplayField.innerText = prevDepoAmount + depositAmount;
        balanceDisplayField.innerText = prevBalance + depositAmount;
    }
}

//Withdraw Handler
const withdrawButton = document.getElementById('withdraw-btn');

withdrawButton.onclick = function () {
    //Getting Withdraw amount
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = parseFloat(withdrawInput.value);

    //Getting previous Withdraw amount
    const withdrawDisplayField = document.getElementById('withdraw-field');
    const prevWdroAmount = parseFloat(withdrawDisplayField.innerText);
    
    //Getting previous Total Balence
    const balanceDisplayField = document.getElementById('balance-field');
    const prevBalance = parseFloat(balanceDisplayField.innerText);

    //Updating Total Withdraw and Total Balence
    if(withdrawAmount > 0 && withdrawAmount < prevBalance) {
        withdrawDisplayField.innerText = prevWdroAmount + withdrawAmount;
        balanceDisplayField.innerText = prevBalance - withdrawAmount;
    }
}