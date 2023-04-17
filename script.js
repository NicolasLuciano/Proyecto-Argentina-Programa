const nombre = document.getElementById("nombreCliente")
const apellido = document.getElementById("apellidoCliente")
const edad = document.getElementById("edad")
const dni = document.getElementById("dni")
const telefono = document.getElementById("telefono")
const email = document.getElementById("email")
const sedes = document.getElementById("sedes")
const condiciones = document.getElementById("condiciones")
const form = document.getElementById("form")
const parrafo0 = document.getElementById("warnings0")
const parrafo1 = document.getElementById("warnings1")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings0 = ""
    let warnings1 = ""
    let warnings = ""
    let entrar0 = false
    let entrar1 = false
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let regexTelefono = /([1-9]{1}[0-9]{2})\s*([0-9]{4})$/
    if (formulario.boton[0].checked == true || formulario.boton[1].checked == true || formulario.boton[2].checked == true ){
    }
    else{
        warnings0 += `Seleccione un plan <br>`
        entrar0 = true
    }
    if(nombre.value.length <3){
       warnings += `- El nombre no es valido <br>`
       entrar = true
    }
    if(apellido.value.length === 0){
        warnings += `- El apellido no es valido <br>`
        entrar = true
     }
     if(dni.value.length === 8){
     }
     else{
        warnings += `- El DNI no es valido <br>`
        entrar = true
     }

    if(!regexTelefono.test(telefono.value)){
        warnings += `- El telefono no es valido <br>`
        entrar = true
     }
    if(!regexEmail.test(email.value)){
        warnings += `- El email no es valido <br>`
        entrar = true
    }
    if (sedes.selectedIndex === 0){
        warnings1 += `Seleccione una sede <br>`
        entrar1 = true
    }
    if (formulario.condiciones.checked == true){
    }
    else{
        warnings += `- Los términos y condiciones no fueron aceptados`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }
    if(entrar0){
        parrafo0.innerHTML = warnings0
    }
    if(entrar1){
        parrafo1.innerHTML = warnings1
    }
})

function genPDF(){

    var doc = new jsPDF();
    let inname = document.getElementById("nombreCliente").value;
    let inapellido = document.getElementById("apellidoCliente").value
    let inedad = document.getElementById("edad").value
    let indni = document.getElementById("dni").value
    let intelefono = document.getElementById("telefono").value
    let inemail = document.getElementById("email").value
    let incomentario = document.getElementById("comentario").value
    let plan = document.querySelector('input[name="boton"]:checked').value
    let insede = document.getElementById("sedes").value
    doc.setFontSize(22);
    doc.text(20,10, "Orden de Compra");
    doc.setFontSize(16);
    doc.text(10,30,"- Nombre: " + inname);
    doc.text(10,40, "- Apellido: " + inapellido);
    doc.text(10,50, "- Edad: " + inedad);
    doc.text(10,60, "- DNI: " + indni);
    doc.text(10,70, "- Telefono: " + intelefono);
    doc.text(10,80, "- Email: " + inemail);
    doc.text(10,90, "- Mensaje: " + incomentario);
    doc.text(10,120, "Tu plan es: " + plan);
    doc.text(10,130, "Retiras en la sede de: " + insede);
    doc.save('MiPedido.pdf');
}
