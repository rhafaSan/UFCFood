function validateLogin(username, password){
    if(username === 'admin' && password === 'admin'){
        return 'credenciais validas'
    } else{
        return 'Usuário ou senha inválidos'
    }
}

