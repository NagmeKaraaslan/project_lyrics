document.getElementById("form"), addEventListener("submit", function (event) {
    event.preventDefault();

    const singer = document.getElementById("singer").value;
    const song = document.getElementById("song").value;

    const apiUrl = `https://api.lyrics.ovh/v1/${singer}/${song}`;

    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var lyrics = data.lyrics;
            document.getElementById("lyrics_box").innerText = lyrics;
        })
        .catch(function (error) {
            document.getElementById("lyrics_box").innerText = "Şarkı Bulunamadı :("
            console.error("Error", error);
        });
});