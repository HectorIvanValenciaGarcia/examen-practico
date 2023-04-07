const modal = document.getElementById("modal")
const agregarEventoVerInfo = (usuarios) => {
    const enlacesVerInfo = document.querySelectorAll('a[data-id]');

    // Agregar evento click a cada enlace "Ver información"
    enlacesVerInfo.forEach(enlace => {
        enlace.addEventListener('click', () => {
            const id = enlace.dataset.id; // Obtener el ID del usuario
            const usuario = usuarios.find(user => user.id === parseInt(id)); // Encontrar el usuario con el ID correspondiente

            modalVer(usuario)
            modal.querySelector(".close").addEventListener("click", () => {
                modal.style.display = "none";
              });

           
        });
    });
};


const modalVer = (usuario) => {
    modal.style.display = "block";
    const infoModal = document.createElement('div')

    infoModal.innerHTML = `<div class="modal-content column">
      <span class="close">&times;</span>
      <h2>Información del usuario</h2>
      <label for="name">Nombre de usuario:</label>
      <input type="text" id="name" value="${usuario.name}" readonly>
     <h3 class="mt-1">Dirección</h3>
     <div class="d-flex row space-between">
      <label for="street">Calle:</label>
      <input type="text" id="street" value="  ${usuario.address.street}" readonly>
      <label for="suite">Número de departamento:</label>
      <input type="text" id="suite" value="  ${usuario.address.suite}" readonly>
     </div>
     <div class="d-flex row space-between  mt-1">
      <label for="city">Ciudad:</label>
      <input type="text" id="city" value="  ${usuario.address.city}" readonly>
      <label for="zipcode">Código postal:</label>
      <input type="text" id="zipcode"  value=" ${usuario.address.zipcode}" readonly>
      </div>
      <h3 class="mt-1">Company</h3>
      <div class="d-flex row space-between  mt-1">
      <label for="company-name">Nombre de la compañía:</label>
      <input type="text" id="company-name" value="  ${usuario.company.name}" readonly>
      <label for="catchphrase">Eslogan:</label>
      <input type="text" id="catchphrase" value="  ${usuario.company.catchPhrase}" readonly>
      </div>
      <div class="d-flex row   mt-1">
      <label for="bs">Servicios:</label>
      <input type="text" id="bs" value="  ${usuario.company.bs}" readonly></div>
    </div>`

    modal.innerHTML = infoModal.innerHTML;

    const inputs = document.querySelectorAll("input[type='text']");
    inputs.forEach(input => {
      input.disabled = true;
    });
    

}



