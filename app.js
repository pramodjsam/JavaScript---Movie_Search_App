window.addEventListener("load",function(){
	document.getElementById("searchForm").addEventListener("submit",function(e){
		e.preventDefault();
		const searchText= document.getElementById("searchText").value;
		getMovies(searchText);
	})
})

function getMovies(searchText){
	let url= `http://www.omdbapi.com/?i=tt3896198&apikey=396832c&s=${searchText}`;
	fetch(url)
		.then(function(response){
			return response.json();
		}).then(function(data){
			fetchMovies(data.Search)
		})
}

function fetchMovies(data){
	let movies=data;
	let output="";
	movies.forEach(function(movie,index){
		output+=`
			<div class="col-md-3">
				<div class="card card-body bg-dark text-light mt-3">
					<img width="200" height="300" src="${movie.Poster}">
					<h5>${movie.Title}</h5>
					<a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="movie.html" target=_blank>Movie Details</a>
				</div>		
			</div>
		`;
		document.getElementById("movies").innerHTML= output;
	})
}

function movieSelected(id){
	sessionStorage.setItem("movieId",id);
	window.location="movie.html";
	return false;
}

// function getMovies(){
// 	// let movieId= sessionStorage.getItem("movieId");
// 	// url= `http://www.omdbapi.com/?i=tt3896198&apikey=396832c&o=${movieId}`;
// 	// console.log(url)
// }