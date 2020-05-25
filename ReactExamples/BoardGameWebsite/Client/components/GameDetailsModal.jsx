import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

import {
  Button, Card, CardContent, Typography,
  Modal, Fade, Backdrop, Grid
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardRoot: {
    display: 'flex',
    maxWidth: 800,
    minHeight: 300
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 500
  },
  description: {
    borderTop: '1px solid lightgrey',
    borderBottom: '1px solid lightgrey'
  },
  content: {
    flex: '1 0 auto'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
}))

export default function GameDetailsModal (props) {
  const [open, setOpen] = useState(true)
  const handleClose = () => { setOpen(false) }

  // Any time this object is rendered call modal to appear
  useEffect(() => { setOpen(true) }, [props.game])

  const classes = useStyles()
  const titleUid = `${props.game.id}-detailsModalTitle`
  return (
    <Modal open={open} onClose={handleClose}
      aria-labelledby={titleUid} closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
      className={classes.root}>
      {/* Trasition for modal to fade in on */}
      <Fade in={open}>
        {/* Main modal card */}
        <Card className={classes.cardRoot}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography component="h5" variant="h5">
                    {props.game.name} ({props.game.year})
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">
                    Required Players: {props.game.players}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">
                    Playtime: {props.game.playtime} minutes
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">
                    Recomended Age: {props.game.minAge} years old
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">
                    Designed by: {props.game.designer}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">
                    Art done by: {props.game.artist}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">
                    Published by: {props.game.publisher}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            {/* Close Button */}
            <div className={classes.controls}>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
            </div>
          </div>
        </Card>
      </Fade>
    </Modal>
  )
}

GameDetailsModal.propTypes = {
  game: PropTypes.object.isRequired
}
