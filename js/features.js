// show the cash out form
// document.getElementById('show-btn-cash-out').addEventListener('click',function(){
//     document.getElementById('cash-out-form').classList.remove('hidden');
//     document.getElementById('add-money-form').classList.add('hidden');
// })
// document.getElementById('btn-add-money').addEventListener('click', function(){
//     document.getElementById('cash-out-form').classList.add('hidden');
//     document.getElementById('add-money-form').classList.remove('hidden')

// })


document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault;
    showSectionById('add-money-form');
})


document.getElementById('show-btn-transaction')
.addEventListener('click', function(event){
    event.preventDefault;
    showSectionById('transaction-history');
})


document.getElementById('show-btn-cash-out')
.addEventListener('click', function(event){
    event.preventDefault;
    showSectionById('cash-out-form');
})