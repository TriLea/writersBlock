document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
});

function onSubmit(event) {
    event.preventDefault();
    console.log("Form has been submitted");
    const input = document.getElementById("input");
    console.log(input.value);
}

document.getElementById("favorites-button").addEventListener("click", currentWordFav);

function currentWordFav() {
    var input = document.getElementById("input").value;
    var favorites = [input];
    localStorage.setItem("favorites", JSON.stringify(favorites));

}

var favoritesList = JSON.parse(localStorage.getItem(favorites));

