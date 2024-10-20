// Cambiar automáticamente el carrusel de canciones cada 3 segundos
$('#lyricsCarousel').carousel({
    interval: 3000 // 3 segundos
  });
  
  // Mostrar mensaje en la consola cuando se carga la página
  document.addEventListener('DOMContentLoaded', function() {
    console.log("Página cargada exitosamente");
  });
  
 // Función para la búsqueda en canciones y otras secciones
$(document).ready(function() {
    $('#search-input').on('keyup', function() {
      var searchText = $(this).val().toLowerCase();
  
     // Filtrar las canciones en la lista del menú
      $('.list-group a').each(function() {
        var itemText = $(this).text().toLowerCase();
        if (itemText.includes(searchText)) {
          $(this).show();  // Mostrar las canciones que coincidan
        } else {
          $(this).hide();  // Ocultar las canciones que no coincidan
        }
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Array con las rutas de las imágenes de fondo
    const backgroundImages = [
        "mac6.jpg",
        "mac2.jpg",
        "mac3.jpeg",
        "mac4.jpeg",
        "mac1.jpg",
        "mac5.jpeg",
        "mac7.jpeg",
        "mac8.jpeg",
        "mac9.jpeg"
    ];

    // Seleccionar una imagen al azar
    const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

    // Aplica la imagen de fondo seleccionada
    document.body.style.backgroundImage = `url(${randomImage})`;
    document.body.style.backgroundRepeat = 'repeat'; // Para el efecto de mosaico
    document.body.style.backgroundSize = 'auto'; // Mantiene el tamaño original
    document.body.style.backgroundPosition = 'top left'; // Inicia desde la esquina superior izquierda
    document.body.style.backgroundAttachment = 'fixed'; // Fija la imagen cuando se hace scroll
});

