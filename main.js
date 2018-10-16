// Your scripts here
const amount = document.getElementById('amount');
const percent = document.getElementById('percent');
const button_calculate = document.getElementById('calculate');
const tip_display = document.getElementById('tip');
const total_display = document.getElementById('total');


let tip = 0;
let total = 0;

button_calculate.onclick = (e) => {

	const tip_percent = Number(percent.value);
	const bill = Number(amount.value);

	tip = (tip_percent/100) * bill;
	total = bill + tip;

	tip_display.innerHTML = tip.toFixed(2);
	total_display.innerHTML = total.toFixed(2);
}
