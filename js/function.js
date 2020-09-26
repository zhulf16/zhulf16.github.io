//FUNCTION ATAU FUNGSI JAVASCRIPT
//Zulfi tazliful ihsan - TI 2019
alert('Selamat Datang..!! \nkali ini kita akan membasah tentang FUNCTION');
alert('SELAMAT BELAJAR :) ');

const fungsi = document.getElementById('fungsijs');

function bagi(a,b){
    hasilBagi = a / b;
    return hasilBagi;
    }
    
    // memanggil fungsi
    var nilai1 = 50;
    var nilai2 = 10;
    var hasilPembagian = bagi(nilai1, nilai2);
    
    //output ditampikan pada HTML
    fungsi.innerHTML = hasilPembagian;

