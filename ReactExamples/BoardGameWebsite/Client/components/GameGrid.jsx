import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import GameTile from './GameTile.jsx'

export default function GameGrid (props) {
  // Build array of tiles based on data given.
  const gameTiles = props.gameData.map((game) => {
    return (<GameTile key={game.id} game={game}
      activeGameCallback={props.activeGameCallback}/>)
  })

  return (
    <Grid container spacing={4} justify="center">
      {gameTiles}
    </Grid>
  )
}

GameGrid.propTypes = {
  gameData: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeGameCallback: PropTypes.func
}
