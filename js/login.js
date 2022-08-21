function login(){
    let correo = document.getElementById('email').value;
    let contraseña = document.getElementById('password').value;

    if(correo == "" || contraseña == ""){
        alert('complete los datos para iniciar sesión');}
    else{
        location.href = 'index.html';
    }
}
let boton = document.getElementById("btn");
boton.addEventListener("click", ()=>{
    login();
})
