//Contoh looping array sederhana
//Zulfi Tazliful Ihsan TI 2019


// tampil di Console.log
console.log('Hellow Word');
console.log('Hellow Word');
console.log('Hellow Word');
console.log('Hellow Word');
console.log('Hellow Word');
console.log('Hellow Word');
console.log('Hellow Word');
console.log('Hellow Word');
console.log('Hellow Word');
console.log('Hellow Word');

// tampil di HTML

const ulang = document.getElementById('loopingjs');

var perulangan = '';
 for (var i = 1; i <= 10; i++) {
   perulangan += 'STMIK DCI TASIKMALAYA<br><br>';
 }
 document.getElementById('loopingjs').insertAdjacentHTML('afterbegin', perulangan);