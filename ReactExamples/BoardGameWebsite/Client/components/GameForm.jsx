import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

const INITIAL_STATE = {
  id: '',
  name: '',
  year: '',
  players: '',
  bggRating: '',
  playtime: '',
  minAge: '',
  designer: '',
  artist: '',
  publisher: ''
}

function useForm (initialState) {
  const [values, setValues] = React.useState(initialState)

  function handleChange (event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  return { values, handleChange }
}

export default function GameForm (props) {
  const { values, handleChange } = useForm(INITIAL_STATE)

  function handleSubmit (event) {
    event.preventDefault()
    axios.post('api/game/insert/', { values })
      .then((res) => {
      })
      .catch((err) => {
        console.error('An error has occured:')
        console.log(err.message)
        window.alert('An error has occured')
      })
    console.log('Form Data:')
    console.table(values)
    props.submitCallback()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-md-6 mb-3">
          <label htmlFor="id">ID(Required)</label>
          <input type="text" className="form-control" id="id" name="id" placeholder="id" value={values.id} onChange={handleChange}></input>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="name">Name(Required)</label>
          <input type="text" className="form-control" id="name" name="name" placeholder="Name" value={values.name} onChange={handleChange}></input>
        </div>
      </div>
      <div className="form-row">
        <div className="col-md-6 mb-3">
          <label htmlFor="validationDefault02">Year</label>
          <input type="text" className="form-control" id="year" placeholder="Year" name="year" value={values.year} onChange={handleChange}></input>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="players">Players</label>
          <input type="text" className="form-control" id="players" placeholder="1-4" name="players" value={values.players} onChange={handleChange}></input>
        </div>
      </div>
      <div className="form-row">
        <div className="col-md-6 mb-3">
          <label htmlFor="playtime">Playtime(In Minutes)</label>
          <input type="text" className="form-control" id="playtime" placeholder="15-30" name="playtime" value={values.playtime} onChange={handleChange}></input>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="minAge">Minimum Age</label>
          <input type="text" className="form-control" id="minAge" placeholder="10+" name="minAge" value={values.minAge} onChange={handleChange}></input>
        </div>
      </div>
      <div className="form-row">
        <div className="col-md-4 mb-3">
          <label htmlFor="designer">Desginer</label>
          <input type="text" className="form-control" id="designer" placeholder="Designers" name="designer" value={values.designer} onChange={handleChange}></input>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="artist">Artist</label>
          <input type="text" className="form-control" id="artist" placeholder="Artists" name="artist" value={values.artist} onChange={handleChange}></input>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="publisher">Publisher</label>
          <input type="text" className="form-control" id="publisher" placeholder="Publisher" name="publisher" value={values.publisher} onChange={handleChange}></input>
        </div>
      </div>
      <button className="btn btn-primary" type="submit" id="submit">Submit form</button>
    </form>
  )
}

GameForm.propTypes = {
  submitCallback: PropTypes.func
}
