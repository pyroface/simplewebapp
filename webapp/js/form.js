const elForm = document.querySelector('#formReg');
const elName = document.querySelector('#txtName');
const elPass = document.querySelector('#txtPass');
const elMail = document.querySelector('#txtMail');
const elOutput = document.querySelector('#output');
const elOutputEmail = document.querySelector('#email');

function showName(event){
	// Använd value när man hämtar från input i formuläret
  let name = elName.value;
  let pass = elPass.value;
  let mail = elMail.value;

  elOutput.textContent = 'Hej ' + name + ". Ett bekräftelsemail har skickats till";
  elOutputEmail.textContent = mail;

  event.preventDefault(); //
}

elForm.addEventListener('submit', showName, false);