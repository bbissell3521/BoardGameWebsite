// import needed libs
import fs from 'fs'
import Express from 'express'

// read in game data from output file
const rawGameData = fs.readFileSync('server/api/output.json', { encoding: 'utf8' })
const fullGames = JSON.parse(rawGameData)

// create a reduced content version of all games for use on landing page.
const reducedGames = fullGames.map((game) => {
  return {
    id: game.id,
    name: game.name,
    year: game.year,
    players: game.players
  }
})
// Create express router object
const router = new Express.Router()

// Setup for a /games endpoint will return JSON for all games in the output file.
router.get('/games', (req, res) => {
  res.json(reducedGames)
})

// Setup for a /game/id endpoint, returns a single game if found based on ID given.
router.get('/game/:id', (req, res) => {
  // take the ID given in URL and make it an int then set it to a variable for use.
  const gameID = req.params.id

  // Find any games with matching ID, return that object with full details.
  const match = fullGames.find(game => {
    // Comparing ints so not sure why you would want === that doesnt work.
    return (game.id === gameID)
  })

  // If no match was found return 404, if match is found return it as JSON.
  if (!match) {
    res.status(404).json({ error: 'id not found' })
  } else {
    res.json(match)
  }
})

// Insert Data Route that will update the JSON file which we are using as a base for all games in the system
// This creates a saved version of the game which will render the next time the page is opened.
router.post('/game/insert/', Express.json(), (req, res) => {
  let flag = true
  console.log(JSON.stringify(req.body.values, null, 2))
  fullGames.forEach(element => {
    if (req.body.values.id === element.id) {
      console.error('An object with that ID already exists try a new ID')
      flag = false
    } else if (req.body.values.id === null || req.body.values.name === null) {
      console.error('An error has occured: Please fill in the fields marked as required.')
      flag = false
    }
  })
  if (flag) {
    fullGames.push(req.body.values)
    const smallGame = {
      id: req.body.values.id,
      name: req.body.values.name,
      year: req.body.values.year
    }
    reducedGames.push(smallGame)
    fs.writeFileSync('./server/api/output.json', JSON.stringify(fullGames))
  }
})

export default router
