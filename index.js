"use strict";
$(function() {
  $("a.scroll_up").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 600, "swing");
    return false;
  });
  $(document).scroll(function() {
    // aca se pregunta si el scroll se movio de pa bajo.
    if ($(this).scrollTop() > 250) {
      // esta parte cambia el atributo "src" de la etiqueta "img"
      $("a.scroll_up").css("visibility", "visible");
      console.log("ahora me ves");
    }
    if ($(this).scrollTop() < 250) {
      $("a.scroll_up").css("visibility", "hidden");
      console.log("ahora no me ves");
    }
  });
});
