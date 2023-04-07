// Función para ordenar los usuarios por nombre
const ordenarUsuariosPorNombre = (usuarios, orden) => {
    return usuarios.sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return orden === 'ascendente' ? comparison : -comparison;
    });
  }


