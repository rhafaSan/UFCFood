function goToRegister(e){
    e.preventDefault();
    window.location.href = "../register/register.html"
}

function goToDashboard(e){
    e.preventDefault();
    window.location.href = "../dashboard/dashboard.html"
}

function watchRegister(e){
    // e.preventDefault()
    const form = document.forms.register_form;
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    })
    const { username } = form;
    var senha = document.getElementById('password');
    console.log(senha.value.length)

    if(username.value.length < 4){
        window.alert('Nome de usuário precisa ser maior que 4 digítos')
    }else if(senha.value.length <= 5){
        window.alert('A senha precisa ser maior ou igual a 6 dígitos')
    }else{
        window.location.href = "../login/index.html"
    }
}