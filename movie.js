function getMovies(){
	let movieId= sessionStorage.getItem("movieId");
	let url= `http://www.omdbapi.com/?i=${movieId}&apikey=396832c`;
	fetch(url)
		.then(function(response){
			return response.json();
		}).then(function(data){
			oneMovie(data);
		})
}

function oneMovie(data){
	console.log(data);
	let output="";
	output+=`
		<div class="row" id="singleMovie">
			<div class="col-md-4">
				<img src="${data.Poster}" class="img-fluid">
			</div>
			<div class="col-md-8">
				<h2>${data.Title}</h2>
				<ul class="list-group">
					<li class="list-group-item"><strong>Genre:</strong> ${data.Genre}</li>
					<li class="list-group-item"><strong>Released:</strong> ${data.Released}</li>
					<li class="list-group-item"><strong>Rated:</strong> ${data.Rated}</li>
					<li class="list-group-item"><strong>IMDB Rating:</strong> ${data.imdbRating}</li>
					<li class="list-group-item"><strong>Director:</strong> ${data.Director}</li>
					<li class="list-group-item"><strong>Writer</strong> ${data.Writer}</li>
					<li class="list-group-item"><strong>Actors:</strong> ${data.Actor}</li>
				</ul>
			</div>
		</div>
		<div class="row mt-5" id="plotRow">
			<div class="card card-body bg-dark text-light mt-3">
				<h3>Plot</h3>
				${data.Plot}
				<hr>
				<a href="http://imdb.com/title/${data.imdbID}" target="_blank" class="btn btn-primary">View iMDB</a>
				<a href="index.html" class="btn btn-success mt-3">Go Back to Search</a>
			</div>
		</div>
	`;
	document.getElementById("movie").innerHTML=output;
}

getMovies();