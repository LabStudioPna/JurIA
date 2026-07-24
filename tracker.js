(function () {
  try {
    var landing = 'JurIA';
    var pagina = encodeURIComponent(location.pathname.replace(/^\//, '') || 'index.html');
    var url = 'https://vps-6064485-x.dattaweb.com/webhook/labstudio-visitas?landing=' + encodeURIComponent(landing) + '&pagina=' + pagina;
    var img = new Image();
    img.referrerPolicy = 'no-referrer-when-downgrade';
    img.src = url;
  } catch (e) {
    // Silencioso: el contador de visitas nunca debe romper la página
  }
})();
