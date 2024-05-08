function nonFo() {document.getElementById('idfoto').style.display = "none";} function showFo() {document.getElementById('idfoto').style.display = "block";}
  function nonDiv() {document.getElementById('Content').style = "opacity:0;visibility:hidden;margin-top:30vh;";} 
  function showDiv() {setTimeout(kpemb,100);document.getElementById('Content').style = "opacity:1;margin-top:4vh;animation:kont 5s infinite;";document.getElementById("katakata").innerHTML = kata1;}
  function loadfoto() {document.getElementById('foto1').src = gambar1;document.getElementById('foto2').src = gambar2;document.getElementById('foto3').src = gambar3;}
  function showAkhir() {setInterval(createHeart,200);document.getElementById('k2').style = "opacity:1;transform:scale(1);margin:0;";document.getElementById('ftdua').style = "transform:scale(1);";document.getElementById('final1').style = "transform:scale(1);";document.getElementById('Content').style.display = "none";}
  function mulaiakhir() {nonDiv();setTimeout(showAkhir,1400);setTimeout(finalis,2400);}
  function showTom() {document.getElementById('idkirim').style = "opacity:1;visibility:visible;margin-top:140px;";} function tombol(){contTom.style="display:flex";} function fakhiran(){document.getElementById("akhiran").style = "display:inline-flex";}
  function otomatis() {befanimkata();setTimeout(animkata,300);}
  function befanimkata(){katakata.style="transform:scale(.01);";katabawah.style="transform:scale(.01);";} function animkata() {katakata.style="transform:scale(1);";katabawah.style="transform:scale(1);";}
  function animakhir() {akhiran.style="display:block;";}
  function kpemb() {setTimeout(tombol,1200);document.getElementById("idgeser").style = "display:none";document.getElementById("bq").style = "opacity:1;visibility:visible;margin-top:0";document.getElementById('bodyblur').style = "opacity:.5;";}
  const swals = Swal.mixin({allowOutsideClick: false, cancelButtonColor: '#FF0040',}); const swalsy = Swal.mixin({confirmButtonText: 'Iya', allowOutsideClick: false,}); const swalst = Swal.mixin({allowOutsideClick: false, showConfirmButton: false, timer: 2500, timerProgressBar: true,});
  var today = new Date();var dd = String(today.getDate()).padStart(2, '0');var mm = String(today.getMonth() + 1).padStart(2, '0');var yyyy = today.getFullYear();const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];today = dd + ' ' + monthNames[today.getMonth()] + ' ' + yyyy;
  function play() {var audio = new Audio('' + linklagu);audio.play();}
  
