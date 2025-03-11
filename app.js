// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo(){
    let amigos = [];
    let nuevoNombre = document.createElement("li");
    let listaNombres = document.getElementById("listaAmigos");
    let nombreMostrado = document.getElementById("amigo");

    const nombreInput = document.getElementById("amigo");
    const nombre = nombreInput.value.trim();
    const lista = document.getElementById("listaAmigos");

    if (nombre === "") {
        alert("Por Favor, ingrese un nombre válido");
      /*  const li = document.createElement("li");
        li.textContent = "No se puede agregar un nombre vacío.";
        lista.appendChild(li);*/
    } 
    else { 
    amigos = document.getElementById('amigo').value;
 // console.log(amigos);
 
 nuevoNombre.textContent = amigos;
 //       amigos.innerHTML =`${amigos[0]}`;
 
 
 listaNombres.appendChild(nuevoNombre);


 nombreMostrado.textContent = amigos;
 document.getElementById("amigo").value= " ";

return console.log("esta funcionando la funcion");
         }
}

//let botonAgregar = document.getElementById("amigo");
//botonAgregar.addEventListener("click", agregarNombre);
