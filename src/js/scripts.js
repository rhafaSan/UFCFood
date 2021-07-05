function goToRegister(e){
    e.preventDefault();
    window.location.href = "../register/register.html"
}

function watchRegister(e){
    e.preventDefault();
    const form = document.forms.register_form;
    
    const { username } = form;
    var senha = document.getElementById('password');
    var confirmeSenha = document.getElementById('confirm_password');
    
    if(username.value.length < 4){
        window.alert('Nome de usuário precisa ser maior que 4 digítos')
    }else if(senha.value.length <= 5){
        window.alert('A senha precisa ser maior ou igual a 6 dígitos')
    }else if(confirmeSenha.value != senha.value){
        window.alert('As senhas não coincidem!')
    }else{
        window.location.href = "../login/index.html"
    }
}

function showPassword(){
    var senha = document.getElementById('password');
    

    if(senha.type === 'password'){
        senha.type = "text";
    }else{
        senha.type = 'password'
    }
}
function showConfirmePassword(){
    var confirmeSenha = document.getElementById('confirm_password');
    

    if(confirmeSenha.type === 'password'){
        confirmeSenha.type = "text";
    }else{
        confirmeSenha.type = 'password'
    }
}