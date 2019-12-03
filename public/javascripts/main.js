
// 登入表單送出時
$('#loginForm').submit(function (event) {
    event.preventDefault();
    const email = $('#loginEmail').val(),
        password = $('#loginPassword').val();

    // firebase authentication
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function (res) {
            res.user.getIdToken()
                .then(function (idToken) {
                    axios.post('/api/login', { idToken: idToken })
                        .then(function (res) {
                            window.location.reload();
                        })
                        .catch(function (err) {
                            console.log(err);
                        });
                })
        })
        .catch(function (err) {
            alert('Login Failed', err);
            console.log('Login Failed', err);
        });
});

function checkPassword(event) {
    const password = $('#signUpPassword').val();
    const confirmPw = $('#comfirmPassword').val();
    if (password === confirmPw) {
        document.getElementById("comfirmPassword").setCustomValidity("");;
    } else {
        document.getElementById("comfirmPassword").setCustomValidity("Passwords Don't Match");;
    }
}

$('#comfirmPassword').on('keyup', checkPassword);
$('#signUpPassword').on('keyup', checkPassword);

$('#signUpForm').submit(function (event) {
    event.preventDefault();
    const email = $('#signUpEmail').val();
    const password = $('#signUpPassword').val();
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(function (res) {
            alert('Signin Success');
            window.location = '/';
        })
        .catch(function (err) {
            alert('Signin Failed');
            console.log(err);
        });
});

// 登出按鈕點擊時
$('#logoutBtn').click(function () {
    axios.post('/api/logout', {})
        .then(function (res) {
            window.location = '/';
        })
        .catch(function (err) {
            alert('Logout failed')
            console.log(err);
        });
});