document.getElementById('login-submit').addEventListener('click', function() {



    const emailFiled = document.getElementById('user-email');
    const useremail = emailFiled.value;

    const passFiled = document.getElementById('user-pass');
    const userpass = passFiled.value;

    if (useremail == 'shadhin22@gmail.com' && userpass == '2323') {

        window.location.href = 'banking.html';
    }

});