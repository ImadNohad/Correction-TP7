let bill = document.getElementById("bill");
let numPeople = document.getElementById("numPeople");
let custom = document.getElementById("custom");
let tip = document.getElementById("tip");
let total = document.getElementById("total");
let reset = document.getElementById("reset");
let numPeopleDiv = document.querySelector(".numPeople");
let billValue = 0;
let numPeopleValue = 0;
let tipPercentage = 0;

function calculate() {
	billValue = parseFloat(bill.value);
	numPeopleValue = parseInt(numPeople.value);

	let tipAmount = 0;
	let totalPP = 0;

	if (custom.value !== "") tipPercentage = parseFloat(custom.value / 100);

	if (numPeopleValue === 0) {
		numPeopleDiv.classList.add("error");
	} else {
		numPeopleDiv.classList.remove("error");
	}

	if (
		!isNaN(billValue) &&
		!isNaN(numPeopleValue) &&
		numPeopleValue !== 0 &&
		tipPercentage !== 0
	) {
		tipAmount = (billValue * tipPercentage) / numPeopleValue;
		totalPP = billValue / numPeopleValue + tipAmount;

		tip.textContent = `$${tipAmount.toFixed(2)}`;
		total.textContent = `$${totalPP.toFixed(2)}`;
	}
}

document.querySelectorAll(".percentage").forEach((el) => {
	el.addEventListener("click", function (e) {
		custom.value = "";
		tipPercentage = parseFloat(e.target.value);
		if (billValue !== "" && numPeopleValue !== "") calculate();
	});
});

[bill, numPeople, custom].forEach((el) => {
	el.addEventListener("keyup", function () {
		calculate();
	});
});

reset.addEventListener("click", function (e) {
	bill.value = "";
	numPeople.value = "";
	custom.value = "";
	tip.textContent = "$0.00";
	total.textContent = "$0.00";
	numPeopleDiv.classList.remove("error");
});
