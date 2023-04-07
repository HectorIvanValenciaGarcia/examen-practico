// Función para renderizar la tabla con los datos
const renderizarTabla = (usuarios) => {
    contenedor.innerHTML = `<table class="w-100 ">
    <thead>
      <tr>
        <th>id</th>
        <th>Nombre</th>
        <th>Username</th>
        <th>Celular</th>
        <th>acciones</th>
      </tr>
    </thead>
    <tbody  id="tbody-usuarios">
        
          
 
    
    </tbody>
  </table>`; // Vaciar el cuerpo de la tabla
  const tbodyUsuarios = document.getElementById('tbody-usuarios');
    usuarios.forEach(usuario => {
      // Crear una nueva fila
      const nuevaFila = document.createElement('tr');
      
      // Agregar los datos del usuario a la fila
      nuevaFila.innerHTML = `
        <td>${usuario.id}</td>
        <td>${usuario.name}</td>
        <td>${usuario.username}</td>
        <td>${usuario.phone}</td>
        <td><a href="#"  id="user" class="btn-primary" data-id="${usuario.id}">Detalles</a></td>
      `;
      

      // Agregar la fila a la tabla
      tbodyUsuarios.appendChild(nuevaFila);
    });
  

  };