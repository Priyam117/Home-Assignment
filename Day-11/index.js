let container = document.querySelector(".area");
let calculate = document.querySelector("#calculate");
let div = document.createElement("p");
calculate.addEventListener("click", () => {
	div.innerText = ""
	let amount = document.querySelector('#billAmount').value;
	let totalPeople = document.getElementById("totalPeople").value;

	var service = document.getElementById("ddlViewBy").value;
	div.innerText = ` Tip Amount is ${amount * service / totalPeople}`
	container.appendChild(div);


})