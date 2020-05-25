import React, { useState } from 'react'

import axios from 'axios'

import { Snackbar, Grid } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

import Banner from './Banner.jsx'
import GameGrid from './GameGrid.jsx'
import GameDetailsModal from './GameDetailsModal.jsx'
import GameForm from './GameForm.jsx'

export default function GameBrowsePage () {
  // Setup our gameData state
  const [gameData, setGameData] = useState(null)
  // Setup activeGame state for use in modal/details
  const [activeGame, setActiveGame] = useState(null)
  // Setup our alert state
  const [alertObj, setAlertObj] = useState({ msg: '', open: false })
  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') { return }
    setAlertObj({ msg: alertObj.msg, open: false })
  }

  // Respond to active game changing
  const retrieveActiveGame = (gameID) => {
    axios.get(`api/game/${gameID}`)
      .then((results) => {
        console.log('loaded full details')
        setActiveGame(results.data)
      })
      .catch((err) => {
        console.error('Error retrieveing movie details')
        console.error(err.message)
        window.alert('Error retrieving movie details')
      })
  }

  // When a game is submitted, call to server to fetch all data again
  // This effectively causes a rerender of the dom
  const gameSubmitted = (game) => {
    console.log('submitCallback')
    axios.get('api/games')
      .then((results) => {
        console.log('loaded data after addition')
        setGameData(results.data)
      })
      .catch((err) => {
        console.error('Error retrieving games')
        console.error(err.message)
        setAlertObj({ msg: 'Error: failed to submit game data', open: true })
      })
  }

  // Retrieve gameData to start.
  if (!gameData) {
    console.log('Retrieving Games')
    setGameData([])
    axios.get('api/games')
      .then((results) => {
        console.log('loaded data')
        setGameData(results.data)
      })
      .catch((err) => {
        console.error('Error retrieving games')
        console.error(err.message)
        setAlertObj({ msg: 'Error: failed to retrieve game data', open: true })
      })
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Banner title='Game Browser'>
          Click on a game below for more information.
        </Banner>
      </Grid>
      <Grid item xs={12}>
        {gameData && <GameGrid gameData={gameData} activeGameCallback={retrieveActiveGame}/>}
      </Grid>
      { (activeGame) &&
        <GameDetailsModal game={activeGame} />
      }
      <Grid item xs={12}>
        <GameForm submitCallback={gameSubmitted}/>
      </Grid>
      <Snackbar
        open={alertObj.open}
        autoHideDuration={5000}
        onClose={handleAlertClose}>
        <Alert onClose={handleAlertClose} severity="error">
          {alertObj.msg}
        </Alert>
      </Snackbar>
    </Grid>
  )
}
