function goToRegister(e){
    e.preventDefault();
    // console.log(window.location.pathname)
    window.location.href = "../register/register.html"
}


function watchRegister(e){
    e.preventDefault()
    const form = document.forms.register_form;
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    })
    const { username } = form;
    if(username.value.length < 4){
        window.alert('Nome de usuário precisa ser maior que 4 digítos')
    }
    console.log(username.value);
}