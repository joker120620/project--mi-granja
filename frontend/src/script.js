
//function cap elements
function captureElementsId(id) {
    return document.getElementById(id)
}

//change for login on registrer
let divloading = captureElementsId("div-loading");
let divLoginAndRegistrer = captureElementsId("div-form-login-registrer")
let navBtnContainer = captureElementsId("nav-btn-conatiner")
let navBtnRegistrer = captureElementsId("div-form-login-registrer")
let btnLogin = captureElementsId("btn-login")
let btnsignIn = captureElementsId("btn-signIn")



captureElementsId("btnSendFormLogin").addEventListener("click", function (event) {
    event.preventDefault()
    let userLogin = captureElementsId("inputUser1").value
    let passwordLogin = captureElementsId("inputPassword1").value
    if (userLogin == "" || passwordLogin == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Dejaste casillas vacias',
        })


    } else {
        //fetching data and auth Login
        let req = { method: 'POST', headers: { "Content-type": "application/json;charset=UTF-8" }, body: `{"user":"${userLogin}", "password":"${passwordLogin}" }` };
            fetch("http://localhost:5000/verify-login", req)
                .then(response => response.json())
                .then(data => {
                    if (data.auth) {
                        location.replace('./src/home/home.html');  
                    }else{
                        Swal.fire({
                            icon: 'error',
                            title: data.msj,
                            text: 'Revisa los datos nuevamente',
                        })
                    }
                });
    }
} );

///////////fuction change of click buttons
function changeButtonClick() {
    divloading.style.display = "flex"
    divloading.setAttribute("class", "div-loading")
    btnsignIn.disabled = true;
    btnLogin.disabled = false;
}
btnsignIn.addEventListener('click', () => {
    changeButtonClick()
    setTimeout(() => {
        divLoginAndRegistrer.innerHTML = '<h2 class="text-center mb-3" id="text-title-login">Sign In</h2><form class=" text-center" id="form-registrer"><div class="mb-3" id="input-email-registrer"><label for="InputEmail" class="form-label">Email</label><input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp"></div><div class="mb-3"><label for="InputUser" class="form-label">Usuario</label><input type="text" class="form-control" id="InputUser" aria-describedby="emailHelp"></div><div class="mb-3"><label for="InputPassword1" class="form-label">Contraseña</label><input type="password" class="form-control" id="InputPassword1"></div><button type="submit" class="boton-send-form-login" id="btnSendFormRegistrer">Entrar</button></form>'
        divloading.style.display = "none"
    }, 3000)
})
btnLogin.addEventListener('click', () => {
    changeButtonClick()
    setTimeout(() => {
        divLoginAndRegistrer.innerHTML = '<h2 class="text-center mb-3" id="text-title-login">Login</h2><form class=" text-center" id="form-login"><div class="mb-3"><label for="inputUser1" class="form-label">Usuario</label><input type="text" class="form-control" id="inputUser1" aria-describedby="emailHelp"></div><div class="mb-3"><label for="inputPassword1" class="form-label">Contraseña</label><input type="password" class="form-control" id="inputPassword1"></div><button type="submit" class="boton-send-form-login" id="btnSendFormLogin">Entrar</button></form>'
        divloading.style.display = "none"
    }, 3000)
})
//active tags bootstrap
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))