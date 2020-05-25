import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card, CardContent, CardActions, Typography, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  card: {
    width: '300px',
    marginRight: '5px',
    marginLeft: '5px',
    marginBottom: '10px',
    padding: '10px'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  button: {
    align: 'center'
  },
  buttonRipple: {
    width: '260px',
    height: '446px'
  }
}))

export default function GameTile (props) {
  // Prevent default behavior, and callback to parent to enable modal.
  const gameTileClicked = (event) => {
    event.preventDefault()
    props.activeGameCallback(props.game.id)
  }

  // Build gameTile element
  const classes = useStyles()
  return (
    <Grid item>
      <Card className={classes.card} variant="outlined" >
        <CardContent>
          <Typography className={classes.title}>
            {props.game.name}
          </Typography>
          <Typography>
            Year: {props.game.year}
          </Typography>
          <Typography>
           Players: {props.game.players}
          </Typography>
        </CardContent>
        <CardActions>
          <Button className={classes.button} variant='contained' size='small' onClick={gameTileClicked}>Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

GameTile.propTypes = {
  game: PropTypes.object.isRequired,
  activeGameCallback: PropTypes.func
}
