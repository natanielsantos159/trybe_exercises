/* const lines = csvString.split('\n');
let types = lines.shift().split(',')
types = types.map(type => { 
  type = type.toLowerCase()
  let words = type.split(' ')
  if(words.length > 1){
    let secondWord = words[1].split('')
    secondWord[0] = secondWord[0].toUpperCase()
    secondWord = secondWord.join('')
    type = words[0] + secondWord
  }
  return type
})
console.log(types)

lines.forEach(line => {
  let splittedLine = line.split(',')
  let letterboxdURI = splittedLine.pop()
  let year = splittedLine.pop()
  let date = splittedLine.shift()
  let name = splittedLine.join()
  //console.log({date: date, name: name, year: year, letterboxdURI: letterboxdURI})
})
 */
const csvString = `Date,Name,Year,Letterboxd URI
2021-07-14,Your Name Engraved Herein,2020,https://boxd.it/qWwA
2021-07-14,Parasite,2019,https://boxd.it/hTha
2021-07-14,Joker,2019,https://boxd.it/h4cS
2021-07-14,Inception,2010,https://boxd.it/1skk
2021-07-14,Get Out,2017,https://boxd.it/eOCm
2021-07-14,Fight Club,1999,https://boxd.it/2a9q
2021-07-14,Lady Bird,2017,https://boxd.it/dGNE
2021-07-14,La La Land,2016,https://boxd.it/a5fa
2021-07-14,The Grand Budapest Hotel,2014,https://boxd.it/3ZqO
2021-07-14,Interstellar,2014,https://boxd.it/4VZ8
2021-07-14,Inglourious Basterds,2009,https://boxd.it/1JzG
2021-07-14,The Wolf of Wall Street,2013,https://boxd.it/3C1m
2021-07-14,Her,2013,https://boxd.it/4O24
2021-07-14,Spirited Away,2001,https://boxd.it/2b4m
2021-07-14,Arrival,2016,https://boxd.it/aNGk
2021-07-14,Eternal Sunshine of the Spotless Mind,2004,https://boxd.it/6YK
2021-07-14,The Social Network,2010,https://boxd.it/17ue
2021-07-14,"Love, Simon",2018,https://boxd.it/g02s
2021-07-14,"Paris, Texas",1984,https://boxd.it/29Ts
2021-07-14,"Girl, Interrupted",1999,https://boxd.it/25ds
2021-07-14,Moonlight,2016,https://boxd.it/d6bE
2021-07-14,1917,2019,https://boxd.it/jj4y
2021-07-14,The Truman Show,1998,https://boxd.it/18U8
2021-07-14,Soul,2020,https://boxd.it/ioLA
2021-07-14,Forrest Gump,1994,https://boxd.it/728
2021-07-14,The Matrix,1999,https://boxd.it/2a1m
2021-07-14,Coco,2017,https://boxd.it/bYJQ
2021-07-14,Taxi Driver,1976,https://boxd.it/2b8y
2021-07-14,Tenet,2020,https://boxd.it/leq4
2021-07-14,Back to the Future,1985,https://boxd.it/2b8e
2021-07-14,The Shawshank Redemption,1994,https://boxd.it/2aHi
2021-07-14,Portrait of a Lady on Fire,2019,https://boxd.it/jkPq
2021-07-14,The Shape of Water,2017,https://boxd.it/dZ5m
2021-07-14,Shutter Island,2010,https://boxd.it/1U82
2021-07-14,It,2017,https://boxd.it/bC8e
2021-07-14,2001: A Space Odyssey,1968,https://boxd.it/2bf0
2021-07-14,Birdman or (The Unexpected Virtue of Ignorance),2014,https://boxd.it/5RFA
2021-07-14,BlacKkKlansman,2018,https://boxd.it/hxL8
2021-07-14,Ratatouille,2007,https://boxd.it/27ww
2021-07-14,Up,2009,https://boxd.it/1OEc
2021-07-14,WALL·E,2008,https://boxd.it/1VEo
2021-07-14,The Martian,2015,https://boxd.it/8SeG
2021-07-14,Donnie Darko,2001,https://boxd.it/2b2A
2021-07-14,Toy Story,1995,https://boxd.it/29qA
2021-07-14,Bohemian Rhapsody,2018,https://boxd.it/f1TK
2021-07-14,A Clockwork Orange,1971,https://boxd.it/2aVE
2021-07-14,Memento,2000,https://boxd.it/2bcK
2021-07-14,M,1931,https://boxd.it/29vq
2021-07-14,The Breakfast Club,1985,https://boxd.it/27q4
2021-07-14,The Perks of Being a Wallflower,2012,https://boxd.it/2ZA8
2021-07-14,Titanic,1997,https://boxd.it/2a2k
2021-07-15,Get Real,1998,https://boxd.it/1xoG
2021-07-15,Fallen Angels,1995,https://boxd.it/1UkW
2021-07-15,Scent of a Woman,1992,https://boxd.it/1YAu
2021-07-15,L'Avventura,1960,https://boxd.it/23hs
2021-07-14,Good Will Hunting,1997,https://boxd.it/2ahY
2021-07-14,Fantastic Mr. Fox,2009,https://boxd.it/1WyQ
2021-07-14,The Prestige,2006,https://boxd.it/293w
2021-07-14,"Monsters, Inc.",2001,https://boxd.it/2a46
2021-07-14,The Florida Project,2017,https://boxd.it/dMG0
2021-07-14,Brokeback Mountain,2005,https://boxd.it/2b2q`

/* 1 Cria uma função chamada convertCsvToObject   que converte a string acima em um array de objetos, e cada objeto são informações de um filme. As chaves que o objeto deve ter estão na primeira linha. Obs: leve em consideração que há filmes que tem virgula no nome.
4 Crie retorne o nome e a data de lançamento do filme com o maior título
5 Crie uma função que retorne um array com todos os títulos em Camel Case. Por exemplo, "yourNameEngravedHerein"
 */
function convertCsvToObject(string){
  const lines = string.split('\n')
  lines.shift()
  const arrayOfMovies = lines.map(line => {
    let splittedLine = line.split(',')
    let letterboxdURI = splittedLine.pop()
    let year = splittedLine.pop()
    let date = splittedLine.shift()
    let name = splittedLine.join()
    if (name.startsWith('"') && name.endsWith('"')){
      name = name.split('')
      name.pop()
      name.shift()
      name = name.join('')
    } 

    return {date: date, name: name, year: year, letterboxdURI: letterboxdURI}
  })
  return arrayOfMovies
}

const movies = convertCsvToObject(csvString)
/* console.log(movies) */
//2 Crie uma função que retorne o array de objetos criado no exercicio 1 em ordem alfabética

const sortMoviesByName = (moviesList) => {
  const sortedList = moviesList.sort((a, b) => {
    if(a.name > b.name){
      return 1
    }
    if(a.name < b.name){
      return -1
    } 
    return 0
  })
  return sortedList
}

const moviesSortedByName = sortMoviesByName(movies)
//console.log(moviesSortedByName)

/* 3 Crie uma função que retorne o nome e a data de lançamento do filme mais antigo da lista */

const sortMoviesByYear = (moviesList) => {
  const sortedList = moviesList.sort((a, b) => a - b)
  return sortedList
}

const moviesSortedByYear = sortMoviesByYear(movies)
console.log(moviesSortedByYear)