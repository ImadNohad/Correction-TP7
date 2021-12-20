let bill = document.getElementById("bill");
let numPeople = document.getElementById("numPeople");
let custom = document.getElementById("custom");
let tip = document.getElementById("tip");
let total = document.getElementById("total");
let reset = document.getElementById("reset");
let numPeopleDiv = document.querySelector(".numPeople");
let buttons = document.querySelectorAll(".percentage");
let tipPercentage = 0;

function calculate(billValue, numPeopleValue, percent) {
	let tipAmount = 0;
	let totalPP = 0;
	tip.textContent = `$0.00`;
	total.textContent = `$0.00`;

	console.log(numPeopleValue);

	if (numPeopleValue == 0) {
		numPeopleDiv.classList.add("error");
	} else {
		numPeopleDiv.classList.remove("error");
	}

	if (!isNaN(billValue) && !isNaN(numPeopleValue) && numPeopleValue > 0) {
		tipAmount = (billValue * percent) / numPeopleValue;
		totalPP = billValue / numPeopleValue + tipAmount;

		tip.textContent = `$${tipAmount.toFixed(2)}`;
		total.textContent = `$${totalPP.toFixed(2)}`;
	}
}

function removeActive(buttons) {
	buttons.forEach((el) => {
		el.classList.remove("active");
	});
}

buttons.forEach((el) => {
	el.addEventListener("click", function (e) {
		custom.value = "";
		tipPercentage = parseFloat(e.target.value);
		if (bill.value !== "" && numPeople.value !== "") {
			calculate(bill.value, numPeople.value, tipPercentage);
		}
		removeActive(buttons);
		e.target.classList.add("active");
	});
});

[bill, numPeople, custom].forEach((el) => {
	el.addEventListener("keyup", function (e) {
		if (e.target.id === "custom") {
			tipPercentage = parseFloat(custom.value / 100);
			removeActive(buttons);
		}
		calculate(bill.value, numPeople.value, tipPercentage);
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
