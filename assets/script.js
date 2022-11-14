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

document.getElementById("favorites-button").addEventListener("click", currentWordFav);

function currentWordFav() {
    var input = document.getElementById("input");
    localStorage.setItem("favorites", input.value);
    console.log(input.value + " has been favorited!");
}






//     if (localStorage.getItem("favorites")){
//         var storage = JSON.parse(localStorage["favorites"]);
//         if (storage.indexOf(input.value) == -1) {
//             storage.push(input.value);
//             localStorage.setItem("favorites", JSON.stringify(storage));
//             console.log("Word has been favorited");
//         }
//         else {
//             console.log("Word already favorited");
//         }
//     }
// }