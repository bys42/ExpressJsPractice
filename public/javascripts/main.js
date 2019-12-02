
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
            alert(err);
            console.log('Login Failed', err);
        });
});

$('#signUpForm').submit(function (event) {
    event.preventDefault();
});

// 登出按鈕點擊時
$('#logoutBtn').click(function () {
    axios.post('/api/logout', {})
        .then(function (res) {
            alert('Logout')
            window.location = '/';
        })
        .catch(function (err) {
            alert('Logout failed')
            console.log(err);
        });
});