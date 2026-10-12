const form = document.getElementById("movieForm");
const titleInput = document.getElementById("movieTitle");
const genreSelect = document.getElementById("movieGenre");
const message = document.getElementById("formMessage");
const movieList = document.getElementById("movieList");
const emptyMessage = document.getElementById("emptyMessage");

const watchlist = {
    movies: [
        {
            title: "The Princess Bride",
            genre: "Adventure",
            watched: false
        },
        {
            title: "Finding Nemo",
            genre: "Animation",
            watched: false
        }
    ],

    toggleWatched(index) {
        this.movies[index].watched = !this.movies[index].watched;
    },

    removeMovie(index) {
        this.movies.splice(index, 1);
    }
};

function saveMovies() {
    localStorage.setItem(
        "movies",
        JSON.stringify(watchlist.movies)
    );
}

function loadMovies() {
    const saved = localStorage.getItem("movies");

    if (saved !== null) {
        try {
            watchlist.movies = JSON.parse(saved);
        } catch {
            watchlist.movies = [];
        }
    }
}

function renderMovies() {
    movieList.replaceChildren();

    watchlist.movies.forEach((movie, index) => {

        const card = document.createElement("li");

        const title = document.createElement("h3");
        title.textContent = movie.title;

        const details = document.createElement("p");
        details.textContent =
            `${movie.genre} • ${movie.watched ? "Watched" : "Not watched"}`;

        const toggleButton = document.createElement("button");
        toggleButton.type = "button";
        toggleButton.textContent =
            movie.watched ? "Mark Unwatched" : "Mark Watched";

        toggleButton.addEventListener("click", () => {
    watchlist.toggleWatched(index);
    saveMovies();
    renderMovies();
});

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.textContent = "Remove";

        removeButton.addEventListener("click", () => {
    watchlist.removeMovie(index);
    saveMovies();
    renderMovies();
});

        card.append(
            title,
            details,
            toggleButton,
            removeButton
        );

        movieList.append(card);
    });

    if (watchlist.movies.length === 0) {
        emptyMessage.textContent =
            "Your watchlist is empty. Add a movie to get started.";
    } else {
        emptyMessage.textContent = "";
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = titleInput.value.trim();
    const genre = genreSelect.value;

    if (title === "") {
        message.textContent = "Enter a movie title.";
        return;
    }

    if (genre === "") {
        message.textContent = "Choose a genre.";
        return;
    }

    watchlist.movies.push({
    title: title,
    genre: genre,
    watched: false
});

saveMovies();
renderMovies();

    message.textContent = "";
    titleInput.value = "";
    genreSelect.value = "";
});

loadMovies();
renderMovies();