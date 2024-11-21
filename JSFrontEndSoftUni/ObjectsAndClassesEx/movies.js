function manageMovies(commands) {
    const movies = [];

    commands.forEach(command => {
        if (command.startsWith("addMovie ")) {
            const movieName = command.slice(9).trim();
            if (!movies.find(movie => movie.name === movieName)) {
                movies.push({ name: movieName });
            }
        } else if (command.includes(" directedBy ")) {
            const [movieName, director] = command.split(" directedBy ");
            const movie = movies.find(movie => movie.name === movieName.trim());
            if (movie) {
                movie.director = director.trim();
            }
        } else if (command.includes(" onDate ")) {
            const [movieName, date] = command.split(" onDate ");
            const movie = movies.find(movie => movie.name === movieName.trim());
            if (movie) {
                movie.date = date.trim();
            }
        }
    });

    const completeMovies = movies.filter(
        movie => movie.name && movie.director && movie.date
    );

    completeMovies.forEach(
        movie => console.log(JSON.stringify(movie))
    );
}

// manageMovies([
//     "addMovie Fast and Furious",
//     "addMovie Godfather",
//     "Inception directedBy Christopher Nolan",
//     "Godfather directedBy Francis Ford Coppola",
//     "Godfather onDate 29.07.2018",
//     "Fast and Furious onDate 30.07.2018",
//     "Batman onDate 01.08.2018",
//     "Fast and Furious directedBy Rob Cohen"
// ]);
