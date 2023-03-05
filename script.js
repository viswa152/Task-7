// Movie - Class
// The class Movie is stated below. An instance of class Movie represents a film.
// This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

class Movie {
  // a) Write a constructor for the class Movie,
  // which takes a String representing the title of the movie,a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
  // b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
  constructor(movie, studio, rating = "PG") {
    this.movie = movie;
    this.studio = studio;
    this.rating = rating;
  }
  getPG(PGmovies) {
    let result = PGmovies.filter((ele) => ele.rating === "PG");
    console.log(result);
  }
}
// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
const newMovie1 = new Movie("Casino Royale", "Eon Productions", "PG13");

// 2.Circle - Class
class Circle {
  constructor(radius = 1, color = "red") {
    this.radius = radius;
    this.color = color;
  }
  getRadius() {
    console.log(this.radius);
  }
  setRadius(userRadius) {
    this.radius = userRadius;
  }
  setColor(userColor) {
    this.color = userColor;
  }
  getColor() {
    console.log(this.color);
  }
  getArea() {
    console.log(Math.PI * this.radius * this.radius);
  }
  getCircumference() {
    console.log(Math.PI * 2 * this.radius);
  }
}
// 3.Write a “person” class to hold all the details.
class person {
  constructor(name, age, gender, DOB) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.DOB = DOB;
  }
}
// 4.write a class to calculate the uber price.
class Uber {
  constructor(name, StartingLocation, destination) {
    this.name = name;
    this.StartingLocation = StartingLocation;
    this.destination = destination;
  }
  fair() {
    let fairPerKm = 5;
    if (this.StartingLocation && this.destination) {
      console.log(
        `your fair is ${Math.ceil(fairPerKm * (Math.random() * 10 + 1))}`
      );
    } else {
      console.log("Location not Valid");
    }
  }
}
