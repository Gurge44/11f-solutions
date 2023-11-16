function Select(value) {
    document.getElementById("name").innerHTML = value;
    document.getElementById("stars").innerHTML = "";
}

function Rate() {
    if (document.getElementById("name").innerHTML == "") return;
    let rating = document.getElementById("rating").value;
    document.getElementById("stars").innerHTML = "";
    if (rating > 5) rating = 5;
    for (let i = 0; i < rating; i++) {
        document.getElementById("stars").innerHTML += `<img src="star.png">`;
    }
}