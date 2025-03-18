// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let listaNombres =[];
function agregarAmigo()
{
   // 2) creamos el nuevo elemento
    let nuevoNombre = document.createElement("li");
    // 1) seleccionamos la lista por su Id listaAmigos
    listaNombres = document.getElementById("listaAmigos");
    let nombreMostrado = document.getElementById("amigo");
    let elementos = listaNombres.getElementsByTagName("li");

    const nombreInput = document.getElementById("amigo");
    const nombre = nombreInput.value.trim();
    const lista = document.getElementById("listaAmigos");

    if (nombre === "") {
        alert("Por Favor, ingrese un nombre válido");
                        } 
    else    { 
      
      let   amigoIngreso = document.getElementById('amigo').value;
      amigos.push(amigoIngreso);
        document.getElementById('amigo').value ='';
        listaNombres.innerHTML = "";
       amigos.forEach(function(friend){
            let li = document.createElement('li');
            li.textContent = friend;
            listaNombres.appendChild(li);
                                    }); 
           //3) al nuevo elemento creado asigno lo que deseo guardar 
           //nuevoNombre.textContent = amigos;
           // 4) agrego a la lista que cree guardo el valor que asigne
        
           //listaNombres.appendChild(nuevoNombre);
           
            
             //   document.getElementById("amigo").value= " ";

            //console.log(amigos[A]);
            console.log(listaNombres);
            

                               }
        console.log(amigos);




        
        // console.log(amigos);
 
       
        //       amigos.innerHTML =`${amigos[0]}`;
 
    
    
  


    //let valor = listaNombres.length;
    //console.log(`${valor}`);
//for (let i = 0; i < elementos.length; i++) {
 //   console.log(elementos[i].textContent);
  
//}
 
                                }

        //return console.log("esta funcionando la funcion");
//}


//let botonAgregar = document.getElementById("amigo");
// //botonAgregar.addEventListener("click", agregarNombre);

function sortearAmigo(){
 //console.log(amigos[A]);
 let lista = document.getElementById("listaAmigos").value;
let nuevoElemento = document.createElement("li");


if (amigos.length>0){

let indice = Math.floor(Math.random()*amigos.length);
let mostrar = document.getElementById("resultado"); //a) selecciono en donde quiero desplegar el texto
listaNombres.innerHTML = "";
mostrar.textContent = `El nombre sorteado es "${amigos[indice]}"`; // b) despliego el texto donde seleccione anteriormente
console.log(amigos[indice]);


} else alert("La lista de amigos esta vacía");
//nuevoElemento.textContent = lista;
//lista.appendChild(nuevoElemento);
//console.log (`${lista}`);


                         }
                           