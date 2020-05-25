// Import needed libs
import Express from 'express'

// Import API router.
import dataRouter from './api/router.js'

// Create express app.
const app = new Express()

// Log all requests given to the server, and pass the request on.
app.use((req, res, next) => {
  console.log(`${req.method} at ${req.path}`)
  next()
})

// Setup the router to use /api as starting datapath.
app.use('/api', dataRouter)

// Setup static page service from public folder.
const middleware = Express.static('./public')
app.use('/', middleware)

// tell the app to listen on port 3000
app.listen(3000)
// confirmation the server is running.
console.log('Listening on localhost, port 3000')
