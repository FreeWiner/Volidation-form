function show_hide_password(target){
	var input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	}
    else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}


function insertElem() {
    var e_mail = document.createElement('p');
    var email = document.getElementById('e-mail');
    var wrapper = document.getElementById('wrapper2')
    document.body.appendChild(p);
    e_mail.className = 'e_mail';
    e_mail.id = 'e_mail';
    e_mail.innerText = email.value;
    wrapper.insertAdjacentElement("afterbegin", e_mail);
    




}
