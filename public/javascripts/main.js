
// 登入表單送出時
$('#loginForm').submit(function (event) {
    event.preventDefault();
    const email = $('#loginEmail').val(),
        password = $('#loginPassword').val();
    console.log('[開始登入]', { email: email, password: password });

    // firebase authentication
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function (res) {
            console.log('Login Success', res);
            res.user.getIdToken()
                .then(function (idToken) {
                    console.log('IdToken:', idToken);
                    axios.post('/api/login', { idToken: idToken })
                        .then(function (res) {
                            console.log(res);
                            window.location.reload();
                        })
                        .catch(function (err) {
                            console.log(err);
                        });
                })
        })
        .catch(function (err) {
            console.log('Login Failed', err);
            alert(err);
        });
});

// 
$('#signUpForm').submit(function (event) {
    event.preventDefault();
    const email = $('#signUpEmail').val(),
        password = $('#signUpPassword').val();
    console.log('[開始註冊]', { email: email, password: password });
});

// 登出按鈕點擊時
$('#logoutBtn').click(function () {
    console.log('[開始登出]');
    axios.post('/api/logout', {})
        .then(function (res) {
            alert('Logout')
            window.location = '/';
        })
        .catch(function (err) {
            console.log(err);
            alert('Logout failed')
        });
});