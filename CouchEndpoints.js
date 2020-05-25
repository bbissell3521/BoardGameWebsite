import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import NodeCouchDB from 'node-couchdb'
/**
 * This code is an example of basic CouchDB server endpoints.
 * The CouchDB server was run locally on my PC, while this would easily serve data on localhost:3000
 * This code would need a front end to display any data properly.
 */

// Setup for couch access
const couch = new NodeCouchDB({
  auth: {
    user: 'admin',
    password: 'admin'
  }
})

// Database information
const dbName = 'games'
// URL to access the view that is setup on the database end
const viewUrl = '_design/fullGame/_view/full'

// Create express server
const app = express()

// Set to templating language for testing view
app.set('view engine', 'ejs')
app.set('views', path.join('views'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Get request on base localhost:3000
// Shows index.ejs displaying all data
app.get('/', (req, res) => {
  couch.get(dbName, viewUrl)
    .then((data, headers, status) => {
      res.render('index', {
        games: data.data.rows
      })
      console.log(data.data.rows)
    }).catch((err) => {
      console.error(err)
      res.send(err)
    })
})

// Insert endpoint requires at least blank strings for all variables
app.post('/game/add', (req, res) => {
  const name = req.body.name
  const genre = req.body.genre
  const year = req.body.year
  const cls = req.body.class
  const teaser = req.body.teaser
  const programmer = req.body.programmer
  const artist = req.body.artist
  const awards = req.body.awards
  const desc = req.body.desc

  // Create a unique ID to use for each of the new documents in the database
  couch.uniqid().then((ids) => {
    const id = ids[0]
    // Insert request being sent to the database
    couch.insert(dbName, {
      _id: id,
      name: name,
      genre: genre,
      year: year,
      class: cls,
      teaser: teaser,
      programmer: programmer,
      artist: artist,
      description: desc,
      awards: awards

    }).then((data, headers, status) => {
      // Redirect the page back to the root, this will rerender the page and show the new data
      res.redirect('/')
    }).catch((err) => {
      res.send(err)
    })
  })
})

// Delete request, requires the ID and rev fields from the document.
app.post('/game/delete/:id', (req, res) => {
  const id = req.params.id
  const rev = req.body.rev

  couch.del(dbName, id, rev)
    .then((data, headers, status) => {
      res.redirect('/')
    })
    .catch((err) => {
      res.send(err)
    })
})

// Setup server to listen on port 3000 for requests
app.listen(3000, () => {
  console.log('Server started on port 3000')
})
