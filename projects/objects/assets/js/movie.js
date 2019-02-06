// Create an array of movie objects
// Each movie should have a title, rating and hasWatched properties
// Iterate through the array with a forEach and print out something that looks like:
/* 
   - You have seen "Frozen" - 4.5 stars
   - You have not seen "Django" - 5 stars
   - You have seen "Vaiana" - 5 stars
   - You have not seen "Shawshank Redemption" - 5 stars
*/

var movieArray = [

{
    title:'hobbit an unexpected journey',
    rating:'7.9',
    seen: true

},

{
    title:'Harry potter och vise sten',
    rating:'7.6',
    seen:true

},

{
    title:'Iron man 3',
    rating:'7.2',
    seen:false

},
{
    title:'Disaster movie',
    rating:'2',
    seen:false            

}
]
movieArray.forEach(function(movie) {
    if (movie.seen == true){
        console.log("You have seen " + movie.title + ", and it has a rating of " + movie.rating)
    }
    else {
        console.log("You have not seen " + movie.title + ", and it has a rating of " + movie.rating)
    }
});

function movieArray(movieDB){ 
    if (movie.seen == true){
        console.log("You have seen " + movie.title + ", and it has a rating of " + movie.rating)
    }
    else {
        console.log("You have not seen " + movie.title + ", and it has a rating of " + movie.rating) 
}
}
movieArray.forEach(movieDB);

console.log(movieDB);

movieArray.forEach(function(movie) {
    var result = "you have";
    if
}
    
