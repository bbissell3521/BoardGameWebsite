/**
 * An object to describe a board game
 */
class BoardGame {
  /**
   * Constructor for the BoardGame class
   * @param {number} id, unique id that matches the id on bgg website
   * @param {string} name, name of the boardgame
   * @param {number} year year the game was released
   * @param {number} bggRating rating of the game from board game geek
   * @param {string} players string formated like this "2-4" which tells how many players the game is designed for
   * @param {string} playtime string formated like this "30-60 minutes" describing length of the game
   * @param {number} minAge minimum suggested age for play
   * @param {string} designer main designer for the game
   * @param {string} artist main artist for the game
   * @param {string} publisher main publisher for the game
   */
  constructor (id, name, year, players, playtime, minAge, designer, artist, publisher) {
    this.id = id
    this.name = name
    this.year = year
    this.players = players
    this.playtime = playtime
    this.minAge = minAge
    this.designer = designer
    this.artist = artist
    this.publisher = publisher
  }

  /**
   * This will return a JSON ready string of the objects contents.
   * @return {string} A JSON formated string of the object.
   */
  stringify () {
    const string = `{"id":${this.id},
                  "name":"${this.name}",
                  "year": ${this.year},
                  "players": "${this.players}",
                  "playtime": "${this.playtime}",
                  "minAge": ${this.minAge},
                  "designer": "${this.designer}",
                  "artist": "${this.artist}",
                  "publisher": "${this.publisher}"
                  }`
    return string
  }

  /**
   * This will take in a json string and create a BoardGame object from it
   * @param {string} json this is a json formated string which contains all parameters for a boardgame
   * @return {BoardGame} A boardgame object containing the data given in the JSON string.
   */
  static parse (json) {
    const parsed = JSON.parse(json)
    const newGame = new BoardGame(parsed.id, parsed.name, parsed.year,
      parsed.players, parsed.playtime, parsed.minAge, parsed.designer, parsed.artist, parsed.publisher)
    return newGame
  }
}

export default BoardGame
