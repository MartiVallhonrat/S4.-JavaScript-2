// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  [];

  for(let i = 0; i < array.length; i++ ) {
    result.push(array[i].director)
  }

  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = [];

  const filterDirector = array.filter(film => film.director == director);
  result = filterDirector;

  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const scoreByDirector = []

  for(let i = 0; i < array.length; i++) {
    
    if(array[i].director == director) {
      scoreByDirector.push(array[i].score)
    }
  }

  const sumScore = scoreByDirector.reduce((accumulator, currentValue) => accumulator + currentValue);
  const result = sumScore / (scoreByDirector.length);

  console.log("EXERCICE 3 ->", result);
  return result; 
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
  if(array.length > 20) {
    const newArr = array;
    const result = []

    const orderedNewArr = newArr.sort((a, b) => a.title.localeCompare(b.title));

    for(let i = 0; i < 20; i++) {
      result.push(orderedNewArr[i].title)
    }
    
    console.log("EXERCICE 4 ->", result);
    return result;
  
  } else {

    const result = []

    for(let i = 0; i < array.length; i++) {
      result.push(array[i].title)
    }

    result.sort();

    console.log("EXERCICE 4 ->", result);
    return result;
  }
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

  const newArr = [...array];

  const result = newArr.sort((a, b) => {
    if (a.year !== b.year){
      return a.year - b.year;
    } else {  
      return a.title.localeCompare(b.title)
    };
  })

  console.log("EXERCICE 5 ->", result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  debugger
  const scoreByGenre = []

  for(let i = 0; i < array.length; i++) {

    const genreSpecific = array[i].genre
    
    if(genreSpecific.find(element => element == genre) !== undefined) {

      if(array[i].score !== "") {
        scoreByGenre.push(array[i].score)
      }
    }
  }

  const sumScore = scoreByGenre.reduce((accumulator, currentValue) => accumulator + currentValue);
  const result = sumScore / (scoreByGenre.length);

  console.log("EXERCICE 6 ->", result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  debugger

  let newArr = array.map(a => {return {...a}});

  for(let i = 0; i < newArr.length; i++) {

    const duration = newArr[i].duration;
    const durationMatches = duration.match(/\d+/g);

    if(durationMatches[1] !== undefined) {

      const finalDuration = ((parseInt(durationMatches[0]) * 60) + parseInt(durationMatches[1]))

      newArr[i].duration = finalDuration;

    } else {

      const finalDuration = (parseInt(durationMatches[0]) * 60)

      newArr[i].duration = finalDuration;
    }
  }

  const notCloned = array == newArr;

  console.log("EXERCICE 7 ->", newArr);
  console.log(array)
  console.log(notCloned)
  return newArr;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  debugger
  const filmsScore = []
  
  for(let i = 0; i < array.length; i++) {

    if(array[i].year == year) {
      filmsScore.push(array[i])
    }
  }

  filmsScore.sort(function(a, b){return b.score - a.score;});

  const result = filmsScore.slice(0, 1);

  console.log("EXERCICE 8 ->", result);
  return result;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
