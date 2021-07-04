function validateLogin(e){
    const form = document.forms.login_form;
    console.log(form)
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    })

    console.log(form);
    const { username, password } = form;
    console.log(username.value);
    console.log(password.value);

    if(username.value === 'admin' && password.value === 'admin'){
        window.location.href = "../main/main.html"
    } else{
        window.alert('Usuário e/ou senha inválidos')
    }
}