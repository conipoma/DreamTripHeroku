// Mostrar viajes para eliminar
function verEliminarViajes() {
  console.log("PEDIDO DE BASE DE DATOS");

  let cardViaje = document.getElementById("cards-trip");

  axios.get("https://dreamtripapp.herokuapp.com/admin/mostrar-viaje").then((response) => {
    console.log("PEDIDO DE BASE DE DATOS");
    console.log(response.data);

    /* Creamos las CARDS */
    response.data.forEach((element) => {
      cardViaje.innerHTML += `<div class="card" style="width: 18rem" id="contender-tarjeta">

      <div class="divCard"><img class="iconoCard" src="../img/maleta.svg" 
          srcset="maleta.svg/></div><br>

            <div class="card-body" id="card">
            
            <h5 class="card-title" id="destino">                
            ${element.destino_viaje}
          </h5>

          <p class="card-text" id="comentario">
            ${element.comentario_viaje}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" id="presupuesto">               
            ${element.presupuesto_viaje}
          </li>
          <li class="list-group-item" id="fecha">                
            ${element.fecha_viaje}
          </li>
          <li class="list-group-item" id="contacto">                
            ${element.contacto_viaje}
        </li>
          <li class="list-group-item" id="btn">                
            <button class="botones-eliminar btn btn-primary" id="${element.id_viaje}" onclick="eliminarViaje(${element.id_viaje})"> Eliminar viaje</button>
          </li>
        </ul>

        <div class="card-body">
          <a href="#" class="card-link" id="usuario">                
            <!-- ACA VA TEXTO -->
          </a>
        </div>
        </div>
        </div class="card" style="width: 18rem;">`;
    });
  });
}

verEliminarViajes()


// Eliminar viaje
function eliminarViaje(id_boton) {

  axios.delete(`https://dreamtripapp.herokuapp.com/admin/eliminar-viaje/${id_boton}`)
  .then(location.reload()); 
  
}

// Cerrar sesión
function cerrarSesion() {
alert('Vas a Cerrar sesión');
axios.get("https://dreamtripapp.herokuapp.com/logout");
window.location = "../pages/login.html";
}
