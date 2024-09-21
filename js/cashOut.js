// document.getElementById('btn_add-cashout').addEventListener('click', function(event){
//     event.preventDefault;
// const amount = document.getElementById('cashout-input-field').value;
// const pin = document.getElementById('cashout-input-field -number').value;
// const currentBalance = document.getElementById('current-money').innerText;
// const amountNumber = parseFloat(amount);
// const currentBalanceNumber = parseFloat(currentBalance);
// if(pin === '1234'){
//     newBalance = currentBalanceNumber - amountNumber;
//     document.getElementById('current-money').innerText = newBalance;
// }
// else{
//     alert('faild cash out. please try again leter')
// }
// })



// cash out event handlar 


document.getElementById('btn_add-cashout')
.addEventListener('click', function(event){
    event.preventDefault;
    const cashOutPin = getInputFieldValueById('cashout-amount-input-field');
    const cashOutAmount = getInputFieldValueById('cashout-input-field');
    const currentBalance = getTextFieldValueById('current-money');
    if(cashOutPin === 1234){
        const CashOutNewBalance = currentBalance - cashOutAmount;
        document.getElementById('current-money').innerText = CashOutNewBalance;

        // add to transation history

        const text = document.createElement('p');
        text.innerText = `Cash out ${cashOutAmount} TK. New Balance ${CashOutNewBalance}`;

        document.getElementById('transaction-container').appendChild(text);
    }
    else{
        alert('faild to cash out. try again')
    }

})