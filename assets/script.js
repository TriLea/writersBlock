/*
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
});
*/

function onSubmit(event) {
    event.preventDefault();
    console.log("Form has been submitted");
    const input = document.getElementById("input");
    console.log(input.value);
}

document.getElementById("favorites-button").addEventListener("click", currentWordFav);

function currentWordFav() {
    var input = document.getElementById("input");
    localStorage.setItem("favorites", input.value);
    console.log(input.value + " has been favorited!");
}

for (var i = 0, local = localStorage.length; i < local; ++i) {
	var elements = document.createElement("p");
	elements.textContent = localStorage.getItem(localStorage.key(i.value));
	console.log("Displaying word: " + i);
	output.appendChild(elements);
}