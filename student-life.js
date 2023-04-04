function kadirHas() {

  var secim = document.getElementById("khu");
  var secim_deger = parseInt(secim.value);

  var liste = document.getElementById("khu_fee_list");

  var fee = parseInt(document.getElementById("khu_total").innerHTML);

  var yaz = document.getElementById("khu_total");


  switch (secim_deger) {
      case 1:
          liste.innerHTML += "<li>Dormitory fee : 55$</li>";
          fee += 55
          yaz.innerHTML = fee;
          break;
      case 2:
          liste.innerHTML += "<li>Tuition fee: 40$</li>";
          fee += 40
          yaz.innerHTML = fee;
          break;
      case 3:
          liste.innerHTML += "<li>Meal fee: 35$</li>";
          fee += 35
          yaz.innerHTML = fee;
          break;
      case 4:
          liste.innerHTML += "<li>Book fee: 22$</li>";
          fee += 22
          yaz.innerHTML = fee;
          break;
  }
}





function cyril() {

    var secim = document.getElementById("cyril");
    var secim_deger = parseInt(secim.value);
  
    var liste = document.getElementById("cyril_fee_list");
  
    var fee = parseInt(document.getElementById("cyril_total").innerHTML);
  
    var yaz = document.getElementById("cyril_total");
  
  
    switch (secim_deger) {
        case 1:
            liste.innerHTML += "<li>Dormitory fee: 40$</li>";
            fee += 40
            yaz.innerHTML = fee;
            break;
        case 2:
            liste.innerHTML += "<li>Tuition fee: 33$</li>";
            fee += 33
            yaz.innerHTML = fee;
            break;
        case 3:
            liste.innerHTML += "<li>Meal fee: 15$</li>";
            fee += 15
            yaz.innerHTML = fee;
            break;
        case 4:
            liste.innerHTML += "<li>Book fee: 13$</li>";
            fee += 13
            yaz.innerHTML = fee;
            break;
    }
  }




  function berlin() {

    var secim = document.getElementById("berlin");
    var secim_deger = parseInt(secim.value);
  
    var liste = document.getElementById("berlin_fee_list");
  
    var fee = parseInt(document.getElementById("berlin_total").innerHTML);
  
    var yaz = document.getElementById("berlin_total");
  
  
    switch (secim_deger) {
        case 1:
            liste.innerHTML += "<li>Dormitory fee:65$</li>";
            fee += 65
            yaz.innerHTML = fee;
            break;
        case 2:
            liste.innerHTML += "<li>Tuition fee: 39$</li>";
            fee += 39
            yaz.innerHTML = fee;
            break;
        case 3:
            liste.innerHTML += "<li>Meal fee: 35$</li>";
            fee += 35
            yaz.innerHTML = fee;
            break;
        case 4:
            liste.innerHTML += "<li>Book fee: 24$</li>";
            fee += 24
            yaz.innerHTML = fee;
            break;
    }
  }

