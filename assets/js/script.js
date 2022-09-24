
// Evento enviar con js
botonFormulario = document.getElementsByClassName('.enviarinfo')
$(".enviarinfo").click(function(){
alert("gracias por contactarnos")
})

// Evento click desaparecer quienes somos

$(".avion-01").click(function () {
  $(".avion-01").toggle("slow");
});

$(".montana-02").click(function () {
  $(".montana-02").toggle("slow");
});

$(".mapa-03").click(function () {
  $(".mapa-03").toggle("slow");
});


//Tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
