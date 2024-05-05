function searchMovie() {
    var input = document.getElementById("movieInput").value;
    var apiKey = "bcb91f23";
    var url = "https://www.omdbapi.com/?apikey=" + apiKey + "&t=" + input;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                var movieDetails = "<h2>" + data.Title + "</h2>";
                movieDetails += "<p><strong>Ano:</strong> " + data.Year + "</p>";
                movieDetails += "<p><strong>Diretor:</strong> " + data.Director + "</p>";
                movieDetails += "<p><strong>Atores:</strong> " + data.Actors + "</p>";
                movieDetails += "<p><strong>Enredo:</strong> " + data.Plot + "</p>";
                movieDetails += "<img src='" + data.Poster + "' alt='" + data.Title + "' class='img-fluid' style='max-width: 300px;'>";
                document.getElementById("movieDetails").innerHTML = movieDetails;
            } else {
                document.getElementById("movieDetails").innerHTML = "<p class='text-danger'>Filme não encontrado</p>";
            }
        })
        .catch(error => console.log(error));
}
