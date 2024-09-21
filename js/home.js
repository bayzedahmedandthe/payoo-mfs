// add money to the account


// document.getElementById('btn_add').addEventListener('click', function (event) {
//     event.preventDefault();
//     const amount = document.getElementById('amount-input-field').value;
//     const pin = document.getElementById('password-input-field').value;
//     const currentBalance = document.getElementById('current-money').innerText;
//     const amountMoneyNumber = parseFloat(amount);
//     const currentBalanceNumber = parseFloat(currentBalance)
//    if(pin === '1234'){
//     const newBalance = amountMoneyNumber + currentBalanceNumber;
//     document.getElementById('current-money').innerText = newBalance
//    }
//    else{
//     alert('faild to add money! please try again')
//    }
// });




// ad money event handlar


document.getElementById('btn_add')
.addEventListener('click', function(event){
    event.preventDefault;
    const amount = getInputFieldValueById('amount-input-field');
    const pin = getInputFieldValueById('password-input-field');
    const mainBalance = getTextFieldValueById('current-money');
 
    if(pin === 1234){
        const newBalance = amount + mainBalance;
        document.getElementById('current-money').innerText = newBalance;
        
        // add to transaction histry

        const p = document.createElement('p');
        p.innerText = `Added: ${amount} TK. NewBalance ${newBalance}`;

        document.getElementById('transaction-container').appendChild(p)
    }
    else{
        alert('faild to add money. please tyr again')
    }
})

