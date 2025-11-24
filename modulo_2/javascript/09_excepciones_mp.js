try {
    const datosLibro = JSON.parse('{"titulo":"La Isla Misteriosa","ejemplares":5}');
    console.log("Datos del libro procesados con éxito:", datosLibro);
  } catch (e) {
    console.log("Error al procesar datos del libro (JSON inválido): ", e.message);
  }

try {
    console.log("Intentando conexión a la base de datos del catálogo...");
    throw new Error('Conexión a la BD fallida: Timeout');
} catch (error) {
    console.log("Error de conexión detectado: ", error.message);
} finally {
    console.log("Finalizó el intento de conexión. Liberando recursos.");
}