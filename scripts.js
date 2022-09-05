jQuery('document').ready(function($){
      // Funcion mostrar
      mostrarUsuarios();
      mostrarEventos();
   
   $('#go').on('click', function (event) {
      addEntry();
   });

   $("#correo").keypress(function(e) {
      if(e.which == 13) {
        e.preventDefault();
        addEntry();       
      }
    });
   
   $('#desplegar').on('click', function (event) {
      $(".nuevoContacto").css("display","inline");
   });   

   $('#removeTabla').on('click', function (event) {
      $("#myTable > tbody").empty();
      //$("#text-actividad").empty();
      localStorage.clear();
   }); 

   $('#ModoClaro').on('mouseover', function (event) {
      var audio = document.getElementById("prueba");
      audio.play();
   }); 

   $('#option1').on('mouseover', function (event) {
      alert("Hello");
   }); 

   $(function () {
      $('#example1').datetimepicker({
        inline: true,
        sideBySide: true,
        format: 'DD-MM-YYYY HH:mm',
        locale: 'es'
      });
    });

   function addEntry() {
      var usuariosExistentes = JSON.parse(localStorage.getItem("usuariosPrueba"));
      if(usuariosExistentes == null) usuariosExistentes = [];
      var usuarioNombre = document.getElementById("name").value;
      var usuarioCorreo = document.getElementById("correo").value;
      var usuario = {
          "nombre": usuarioNombre,
          "correo": usuarioCorreo
      };
      //guardo elementos en el array
      usuariosExistentes.push(usuario);
      localStorage.setItem("usuariosPrueba", JSON.stringify(usuariosExistentes));
      $('#myTable').append('<tr class="user"><td class="user-name">'+usuario.nombre+'</td><td class="user-email">'+usuario.correo+'</td> <td class="checkFila" ><input type="checkbox" id="check"</td><td><i class="fa fa-minus" onclick="removeEntry(event)"></i></td> </tr>');
      $("#correo").val("");
      $("#name").val("");
      };

     function mostrarUsuarios() {
       var usuarios = JSON.parse(localStorage.getItem("usuariosPrueba")) || [];
         for(let i = 0;i<usuarios.length;i++) {
            $('#myTable').append('<tr class="user"><td class="user-name">'+usuarios[i].nombre+'</td><td class="user-email">'+usuarios[i].correo+'</td> <td class="checkFila"><input type="checkbox"  id="check"</td><td> <button style="font-size:10px" type="button" class="buttons btn-secondary" onclick="removeEntry(event)">ELIMINAR</button> </td> </tr>');
       }
     }
    
});

function mouseprueba(){
   alert("Hello");
}

// function mouseOver2(){
//   /* alert("e")*/
// }
function removeEntry(event) {
   columna = event.target.parentElement;
   fila = columna.parentElement;
   fila.remove();
}

function eventEnterOscuro() {
 //$(".card-title").html("<h3>Modo Oscuro</h3>");
 $(".card-text").html("Cambia el aspecto de la interfaz a colores oscuros");
 $(this).addClass('active');
 var audio = document.getElementById("audioOscuro");
//Descomentar para escuchar audio
//audio.play();
}

function eventEnterClaro() {
   //$(".card-title").html("<h3>Modo Claro</h3>");
   $(".card-text").html("Cambia el aspecto de la interfaz a colores claros");
  }

function eventClickClaro() {
   $('body').css('color', '#121212');
   $('body').css('background', '#ffffff');
   $('body').css('background', '#ffffff');
   $("#menu").css("background",'#0db5d7');
}


function eventClickOscuro() {
   $('body').css('background', '#181818');
   $('body').css('color', '#ffffff');
   $('.titulo-activity').css('color', '#ffffff');
   $('#myTable').css('color', '#ffffff');
   $("#desplegar").css("background",'#282C34');
   $("#menu").css("background",'#282C34');
   $("navbar-light").css("background", '#202020' );
   $("footer").css("background", '#202020' );
   $(".footer-bottom").css("background", '#202020' );
   $("footer").css("color", '#ffffff' );
   $(".footer-bottom").css("color", '#ffffff' );
   $(".footer-text").css("color", '#ffffff' );
   $(".fa").css("color", '#ffffff' );
   $(".glyphicon").css("color", '#ffffff')

   $('.active').attr('style', 'background-color: #1adbff !important');
   $('.active').css('color','#282C34');

   $('.btn-secondary').attr('style', 'background-color: #1adbff !important');
   $('.btn-secondary').css('color','#282C34');

   $('.dropdown-menu').attr('style', 'background: #282C34 !important');
   $('.card-body').attr('style', 'background: #282C34 !important');
   $('.card-title').attr('style', 'color: #ffffff !important');
   $('.card-title-second').attr('style', 'color: #ffffff !important');
   $('.card-title-third').attr('style', 'color: #ffffff !important');
   $('.card-title-fourth').attr('style', 'color: #ffffff !important');
   $('.card-text').attr('style', 'color: #ffffff !important');
   $('.card-text-second').attr('style', 'color: #ffffff !important');
   $('.card-text-third').attr('style', 'color: #ffffff !important');
   $('.card-text-fourth').attr('style', 'color: #ffffff !important');
   $("#removeTabla").attr('style', 'background: #fa8072 !important');
   $('#removeTabla').css('color','#282C34');
}


function eventEnterNormal() {
 //$(".card-title-second").html("<h3>Modo fuente normal</h3>");
 $(".card-text-second").html("Cambia el tamaño de fuente al original");
}

function eventEnterGrande() {
 //$(".card-title-second").html("<h3>Modo fuente grande</h3>");
 $(".card-text-second").html("Agranda el tamaño de la fuente de algunos elementos");
}

function eventClickNormal() {
   $('body').css('font-size', '20px');
}

function eventClickGrande() {
   $('body').css('font-size', '30px');
   $('#text-actividad').css('font-size', '40px');
   
}

function eventEnterMouseNormal() {
   //$(".card-title-third").html("<h3>Vuelve a dejar el cursor en tamaño normal</h3>");
   $(".card-text-third").html("Vuelve a dejar el cursor en tamaño normal");
}

function eventEnterMouseGrande() {
   //$(".card-title-third").html("<h3>Agranda el cursor para que lo veas mejor</h3>");
   $(".card-text-third").html("Agranda el cursor para que lo veas mejor");
}
  
function eventEnterMouseNegro() {
   //$(".card-title-third").html("<h3>Cambia el color del cursor a negro y lo agranda</h3>");
   $(".card-text-third").html("Cambia el color del cursor a negro y lo agranda");
}

function eventClickMouseNormal() {
   $('body').css( 'cursor', 'default');
}

function eventClickMouseGrande() {
   $('body').css( 'cursor', 'url(PNGs/big_white.png), default');
}

function eventClickMouseNegro() {
   $('body').css( 'cursor', 'url(PNGs/big_black.png), default');
}

function eventEnterRemove() {
   $(".card-title-fourth").html("<h3>Elimina la cuenta definitivamente</h3>");
   $(".card-text-fourthd").html("<h5>estoy en modo eliminar</h5>");
}

function eventClickRemove() {
   window.location.replace("indexPrincipal.html");
}

function clickEvento() {
   var arrayCorreo = [];
   var arrayNombres = [];
  
   $("#myTable .user").each(function () {
  
     var boolean = ($(this).find("td.checkFila input[type=checkbox]").is(":checked"));
  
     if (boolean == true) {
  
        var nombre = $(this).find("td.user-name").text();
        var email =  $(this).find("td.user-email").text();
  
        arrayNombres.push(nombre);
        arrayCorreo.push(email);
     }
   
   });
  
   var dateTime = $('#dateAndTime').val();
   
   var evento = $("<div class='div-actividad'><span style='font-size:18px'>Reunion Creada en la fecha <b>"+dateTime+" </b> con los usuarios <b> "+arrayNombres+"</b> para entrar en la reunion pulsa el siguiente botón </span> <button type='button' onclick='prueba()' class='btn btn-secondary'>Zoom</button><br><br></div>");
   

   var eventosExistentes = JSON.parse(localStorage.getItem("eventos"));
   
   if(eventosExistentes == null) eventosExistentes = [];
   //guardo elementos en el array
   eventosExistentes.push(evento.html());

   localStorage.setItem("eventos", JSON.stringify(eventosExistentes));

   evento.appendTo("#text-actividad");

  }


   function mostrarEventos() {

    var eventos = JSON.parse(localStorage.getItem("eventos")) || [];

      for(let i = 0;i<eventos.length;i++) {
         $('#text-actividad').append(eventos[i]);
    }
  }

  function despliegaModal() {
   $("#myModal").modal();
  }


  function redirige(){
   window.location.replace("indexPrincipal.html");
  }

  function prueba() {
   window.location.replace("http://127.0.0.1:3000/");
  }