//function cap elements
function captureElementsId(id) {
    return document.getElementById(id)
}

//window.history.forward(1); //Esto es para cuando le pulse al botón de Atrás
//window.history.back(1); //Esto para cuando le pulse al botón de Adelante
//change for login on registrer
let divloading = captureElementsId("div-loading");
let divLoginAndRegistrer = captureElementsId("div-form-login-registrer")
let navBtnLogin = captureElementsId("nav-btn-login")
captureElementsId("btn-signIn").addEventListener('click',()=>{
    divLoginAndRegistrer.innerHTML=""
    navBtnLogin.style.display="none"
    divloading.style.display="flex"
    setTimeout(()=>{
        divLoginAndRegistrer.innerHTML='<h2 class="text-center mb-3" id="text-title-login">Sign In</h2><form class=" text-center" id="form-registrer"><div class="mb-3" id="input-email-registrer"><label for="InputEmail" class="form-label">Email</label><input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp"></div><div class="mb-3"><label for="InputUser" class="form-label">Usuario</label><input type="text" class="form-control" id="InputUser" aria-describedby="emailHelp"></div><div class="mb-3"><label for="InputPassword1" class="form-label">Contraseña</label><input type="password" class="form-control" id="InputPassword1"></div><button type="submit" class="boton-send-form-login">Entrar</button></form>'
        divloading.style.display="none"
    }, 3000)
})
captureElementsId("btn-login").addEventListener('click',()=>{
    captureElementsId("div-form-login-registrer").innerHTML='<h2 class="text-center mb-3" id="text-title-login">Login</h2><form class=" text-center" id="form-login"><div class="mb-3"><label for="InputUser" class="form-label">Usuario</label><input type="text" class="form-control" id="InputUser" aria-describedby="emailHelp"></div><div class="mb-3"><label for="InputPassword1" class="form-label">Contraseña</label><input type="password" class="form-control" id="InputPassword1"></div><button type="submit" class="boton-send-form-login">Entrar</button></form>'
})
