// Función para renderizar la tabla con los datos
const renderizarCards = (usuarios) => {
   contenedor.innerHTML = ''; // Vaciar el cuerpo de la tabla
  contenedor.classList.add("d-flex","gap-1","flex-wrap","space-evenly","mt-1")
    usuarios.forEach(usuario => {
        // Crear una nueva fila
        const nuevaCard = document.createElement('div');

        nuevaCard.classList.add("card","d-flex", "column" ,"w-10","justify-around","p-1","hover-effect")
        
        // Agregar los datos del usuario a la fila
        nuevaCard.innerHTML = `
   
          <p>${usuario.id}</p>
          <p>${usuario.name}</p>
          <p>${usuario.username}</p>
          <p>${usuario.phone}</p>
          <p><a href="#"  id="user" class="btn-primary" data-id="${usuario.id}">Detalles</a></p>
        
        `;
        
  
        // Agregar la fila a la tabla
        document.getElementById("contenedor").appendChild(nuevaCard);
      });
    

  };