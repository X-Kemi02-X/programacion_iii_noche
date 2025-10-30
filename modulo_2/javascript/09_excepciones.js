try {
    const user = JSON.parse('{"name":"pedro",edad:25}');
    console.log(user);
  } catch (e) {
    console.log("Error detectado: ", e.message);
  }

try {
    console.log("Intentado abrir archivo..");
    throw new Error('Archivo no encontrado');
}catch(error){
    console.log("Error: ", error.message);
} finally{
    console.log("Finalizo el intento de abrir el archivo")
}