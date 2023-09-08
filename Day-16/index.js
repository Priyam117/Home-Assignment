const textarea = document.getElementById("myTextarea");

function saveToLocalStorage() {
	localStorage.setItem("savedText", textarea.value);
}

if (localStorage.getItem("savedText")) {
	textarea.value = localStorage.getItem("savedText");
}
textarea.addEventListener("input", saveToLocalStorage);