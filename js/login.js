// cash out to the acount

document.getElementById('btn-login')
.addEventListener('click', function(event){
  event.preventDefault(); 
const phoneNumber = document.getElementById('phone-number-input').value;
const pinNumber = document.getElementById('pin-number').value;
if(phoneNumber === '5' && pinNumber === '1234'){
window.location.href = '/home.html';
}
else{
  alert('wrong phonenumber or pin. try again')
}
})

