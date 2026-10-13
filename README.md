https://github.com/cdloog58/garbanzo-figgle
Movie Properties:
Each movie is stored as an object with a title, genre, and watched property. The title stores the movie name, the genre stores the selected genre, and watched stores either true or false depending on whether the movie has been watched.
Method:
My watchlist object contains a method called toggleWatched(). This method changes the watched value from true to false or from false to true when the user clicks the button. I also used a removeMovie() method to remove a movie from the watchlist.
Saving and Loading:
I used localStorage to save the movie array so the watchlist stays on the page after it is refreshed. JSON.stringify() converts the movie array into a string for storage, and JSON.parse() converts it back into an array when the page loads.
final note: this was tough
