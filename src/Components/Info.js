import React from 'react'
import Form from './Form'

function Info({name, color, movies}) {
    console.log(name, color, movies)
  return (
    <div>
        <h1>Info</h1>
        <h3>Name: {name}</h3>
        <h3>Favorite Color: {color}</h3>
        <h3>Favorite Movie 1: {movies[0]}</h3>
        <h3>Favorite Movie 2: {movies[1]}</h3>
        <h3>Favorite Movie 3: {movies[2]}</h3>

        
    </div>
  )
}

export default Info