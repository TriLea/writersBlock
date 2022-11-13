/*
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
}); */

function onSubmit(event) {
    event.preventDefault();
    console.log("Form has been submitted");
    const input = document.getElementById("input");
    console.log(input.value);
}

document.getElementById("favorites-button").addEventListener("click", currentWordFav);

async function currentWordFav() {
    var input = document.getElementById("input").value;
    var favorites = [input];
    localStorage.setItem("favorites", JSON.stringify(favorites));
    var append = document.createElement('p');
    append.innerHTML = favorites
    document.body.appendChild(append);
    // const answers = await fetch('https://www.stands4.com/services/v2/syno.php?uid&tokenid=tk324324&word=${input}');
    // console.log(answers);
    
}


// var favoritesList = JSON.parse(localStorage.getItem(favorites));




function onSubmit(event) {
    event.preventDefault();
    console.log("Form has been submitted");
    const input = document.getElementById("input");
    console.log(input.value);
}