let intro = '';
function generate(){
intro = document.getElementById('input');
let str = intro.value.replace(/\s+/g, ' ');

let result = '';
let tabHead = '<th> POZITII </th>';

for (var i = 0; i < pos.length; i++){
	tabHead += '<th>' + pos[i] + '</th>';
}

let tr = '';

for (var i = 0; i < base.length; i++){

	let posName = base[i].toUpperCase();
	let td = '<td>' + posName + '</td>';
	
	for (var j = 0; j < pos.length; j++){
		let searchName = posName + ' ' + pos[j];
		var findPos = str.indexOf(searchName); // LOGICA DE BAZA
		if (findPos > 0) {
			td += '<td>' + parseInt(str.substr(findPos + searchName.length + 6, 5)) + '</td>'; // daca se copie fara 'buc.', atunci  searchName.length + 1, 4
		}
		else td += '<td style="background: #1e5799; background: -moz-linear-gradient(top, #1e5799 0%, #2989d8 50%, #207cca 51%, #7db9e8 100%); background: -webkit-linear-gradient(top, #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%);background: linear-gradient(to bottom, #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%)" </td>';
	}

	tr += '<tr>' + td + '</tr>';
}

result = '<table>' + tabHead + tr + '</table>';

if (str.length < 100) {
	intro.value = '';
	intro.placeholder="invalid text";
	result = '';
} 

document.getElementById('result').innerHTML = result;

}

function remove(){
	document.getElementById('input').value = '';
	location.reload()
}






// -------------------------------


// let base = { // pozitii ca in specificatie
// 	1: 'morcov dulce',
// 	2: 'morcov iute',
// 	3: 'morcov picant',
// 	4: 'sfecla picanta',
// 	5: 'telina picanta',
// 	6: '"sanatate"',
// 	7: 'conopida marinate',
// 	8: 'varza de mare',
// 	9: 'vinata delicioasa',
// 	10: 'vinata picanta',
// 	11: 'vinata tocata',
// 	12: 'asorti de varza picant',
// 	13: 'adjica delicioasa', 
// 	14: 'tomate picante marinate',
// 	15: 'tomate murate',
// 	16: 'rosii murate verzi',
// 	17: 'castraveti murati',
// 	18: 'cornisoni murati',
// 	19: 'castraveti murati procesati',
// 	20: 'varza murata',
// 	21: 'ardei umpluti',
// 	22: 'morcov dulce top',
// 	23: 'morcov iute top',
// 	24: 'morcov picant top',
// 	25: 'varza murata top',
// 	26: 'harbuz murati',
// }
// let pos = { // gramaj ca in specificatie
// 	1: '200g',
// 	2: '400g',
// 	3: '1000g',
// 	4: '600g',
// 	5: '(VID) 500g',
// 	6: '500g'
// }



// let intro = '';
// function generate(){
// intro = document.getElementById('input').value;
// let str = intro.replace(/\s+/g, ' ');
// let arr = str.split(', ');

// const baseLength = Object.getOwnPropertyNames(base).length;
// const posLength = Object.getOwnPropertyNames(pos).length;

// let result = '';
// let tabHead = '<th> POZITII </th>';

// for (key in pos){
// 	if (pos[key] == '') {tabHead += '<th>' + 'kg' + '</th>'; continue;}
// 	tabHead += '<th>' + pos[key] + '</th>';
// }

// let tr = '';

// for (key in base){

// 	let posName = base[key].toUpperCase();
// 	let td = '<td>' + posName + '</td>';
	
// 	for (key in pos){
// 		let searchName = posName + ' ' + pos[key];
// 		var findPos = arr[0].indexOf(searchName); // LOGICA DE BAZA
// 		if (findPos > 0) {
// 			td += '<td>' + parseInt(arr[0].substr(findPos + searchName.length + 1, 4)) + '</td>';
// 		}
// 		else td += '<td style="background: silver"></td>';
// 	}

// 	tr += '<tr>' + td + '</tr>';
// }

// result = '<table>' + tabHead + tr + '</table>';
// document.getElementById('result').innerHTML = result;

// }

// function remove(){
// 	document.getElementById('input').value = '';
// }
