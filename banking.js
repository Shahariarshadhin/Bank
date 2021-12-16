function getInputvalue(Inputid) {

    const Input = document.getElementById(Inputid);
    const InputAmounttext = Input.value;
    const InputAmount = parseFloat(InputAmounttext);
    Input.value = '';
    return InputAmount;
}

function updateTotalfield(totalFieldid, newDepositAmount) {

    const TotalField = document.getElementById(totalFieldid);
    const TotalText = TotalField.innerText;
    const preTotalAmount = parseFloat(TotalText);
    TotalField.innerText = preTotalAmount + newDepositAmount;
}

function updateBalance(newDepositAmount, isAdd) {

    const balanceTotal = document.getElementById('balance-total');
    const preBalanceText = balanceTotal.innerText;
    const preBalanceAmount = parseFloat(preBalanceText);
    balanceTotal.innerText = preBalanceAmount + newDepositAmount;

    if (isAdd == true) {
        balanceTotal.innerText = preBalanceAmount + newDepositAmount;
    } else {
        balanceTotal.innerText = preBalanceAmount - newDepositAmount;
    }
}


document.getElementById('deposit-button').addEventListener('click', function() {

    const newDepositAmount = getInputvalue('input-deposit');

    if (newDepositAmount > 0) {
        updateTotalfield('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);

    }

});

document.getElementById('withdraw-button').addEventListener('click', function() {

    const newWithdrawTotal = getInputvalue('input-withdraw');

    if (newWithdrawTotal > 0) {

        updateTotalfield('withdraw-total', newWithdrawTotal);

        updateBalance(newWithdrawTotal, false);
    }

})