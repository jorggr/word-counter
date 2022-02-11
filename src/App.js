import './App.css'

import { useState } from 'react'

function App() {
  // estado inicial, la funcion que actualizar el estado inicial
  const [word, setWord] = useState(0)
  // funcion que se ejecuta al escribir en nuestra entrada de texto
  const launchCounter = (evt) => {
    // obtenemos el valor
    const text = evt.target.value
    // separamos las palabras de los espacios
    const separator = text.split(' ')
    // eliminamos espacios en blanco creando un nuevo array con los elementos
    // que cumplan x condicion, en este caso obtenemos los elementos diferentes a vacio
    const filterWords = separator.filter((element) => element)
    // verificamos la cantidad de elementos existentes
    const counter = filterWords.length
    console.log(evt.target.value)
    // actualizamos el valor del estado inicial
    setWord(counter)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="code">Usted ha escrito {word} palabras</h1>
        <input type="text" className="App-input" onChange={launchCounter} />
      </header>
    </div>
  )
}

export default App
