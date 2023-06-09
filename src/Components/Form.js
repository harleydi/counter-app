import React, { useState } from 'react'
import Info from './Info'

function Form() {
    const [name, setName] = useState("")
    const [favoriteColor, setFavoriteColor] = useState("")
    const [favoriteMovie, setFavoriteMovie] = useState(["", "", ""])
    const [submitted, setSubmitted] = useState(false)

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleColorChange = (e) => {
        setFavoriteColor(e.target.value)
    }
    const handleMovies = (e) => {
        const name = e.target.name
        const value = e.target.value

        const newFavoriteMovies = [...favoriteMovie]
        if (name === 'movie1') {
            newFavoriteMovies[0] = value
        }
        if (name === 'movie2') {
            newFavoriteMovies[1] = value
        }
        if (name === 'movie3') {
            newFavoriteMovies[2] = value
        }

        setFavoriteMovie(newFavoriteMovies)
        
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)

    }
    
  return (
    <div>
        <form onSubmit={handleOnSubmit}>
            <label htmlFor="name">Name:</label>
            <input type='text' name='name' value={name} onChange={handleNameChange} />

            <label htmlFor="color">Favortie Color</label>
            <input type='text' name='favoriteColor' onChange={handleColorChange} />

            <label htmlFor="movie1">Movie 1:</label>
            <input  name='movie1' onChange={handleMovies} />
            <label htmlFor="movie2">Movie 2:</label>
            <input name='movie2' onChange={handleMovies} />
            <label htmlFor="movie3">Movie 3</label>
            <input name='movie3' onChange={handleMovies} />
            <button>Save Me</button>
        </form>
        {submitted && <Info name={name} color={favoriteColor} movies={favoriteMovie} />}
    </div>
  )
}

export default Form