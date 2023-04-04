var countDownDate = new Date("2023/03/30 08:00:53").getTime(); //geri sayılacak ileri zamanki bir tarihi milisaniye olarak al 1 saniye = 1000 milisaniye
var dayText	= " Day";
var hourText	= " Hour";
var minuteText	= " Minute";
var secondText	= " Second";
if (countDownDate){ //
	var x = setInterval(function() {  //.setInterval(): Milisaniye cinsinden belirli aralıklarla bir fonksiyonu çağırmaya yarar. pencere kapatılıncaya kadar fonksiyonu çağırmaya devam eder.
		var now = new Date().getTime(); //şimdiki zamanı al
		var distance = countDownDate - now; //geri sayılacak tarih ile şimdiki tarih arasındaki zaman farkını al
		if (distance < 0) { //zaman farkı yok ise belirtilen zamanı geçti
			clearInterval(x); //sayacı sil
			$("#countdown_timer").html("Application for the 2023 intake is NOW CLOSED");
		}else { //zaman farkı var ise
			//aradaki zaman farkını gün,saat,dakika,saniye olarak böl
			var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
				hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
				minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
				seconds = Math.floor((distance % (1000 * 60)) / 1000),
				days = (days?''+days+''+dayText+'':''), //gun varsa gun degerini yaz
				hours = (hours?''+hours+''+hourText+'':''), //saat varsa saat degerini yaz
				minutes = (minutes?''+minutes+''+minuteText+'':''), //dakika varsa dakika degerini yaz
				seconds = (seconds?''+seconds+''+secondText+'':''); //saniye varsa saniye degerini yaz
			document.getElementById("countdown_timer").innerHTML = `${days} ${hours} ${minutes} ${seconds} left`; //yazdır
		}
	}, 1000); //1 saniyede bir sayaç güncellenecek
}