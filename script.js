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
        }
    ],

    toggleWatched(index) {
        // TODO (Step 4)
    },

    removeMovie(index) {
        // TODO (Step 4)
    }
};

function saveMovies() {
    // TODO (Step 6)
}

function loadMovies() {
    // TODO (Step 6)
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

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.textContent = "Remove";

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

renderMovies();