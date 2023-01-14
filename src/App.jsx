import { useState } from 'react'
import result from '../src/assets/result.svg'
import './App.css'

function App() {
  const [dark, setDark] = useState(false)

  const toggleDark = () => {
    setDark(!dark)
    console.log('toggeled')
  }

  return (
    <div className="App">
      <div className={dark ? 'container darkMode' : 'container lightMode'}>
        <button onClick={() => toggleDark()}>
          <svg className='ToggleButton' width="349" height="154" viewBox="0 0 349 154" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect className='rect' x="0.631073" width="348.369" height="154" rx="77" fill={dark ? 'black' : '#D9D9D9'} />

            <path className={dark ? 'circleDark' : 'circle'} fillRule="evenodd" clipRule="evenodd" d="M247.704 15.8859C281.25 15.8859 308.444 43.0803 308.444 76.6262C308.444 110.172 281.25 137.366 247.704 137.366C214.158 137.366 186.964 110.172 186.964 76.6262C186.964 43.0803 214.158 15.8859 247.704 15.8859Z" fill="#0451FB" />

            <path className='sun rotate' d="M214.75 77H205.25M248 43.75V34.25M290.75 77H281.25M248 119.75V110.25M271.511 100.512L278.228 107.229M217.771 46.7714L224.489 53.4889M271.511 53.4884L278.228 46.771M217.771 107.229L224.489 100.511M262.25 77C262.25 84.8703 255.87 91.25 248 91.25C240.13 91.25 233.75 84.8703 233.75 77C233.75 69.1297 240.13 62.75 248 62.75C255.87 62.75 262.25 69.1297 262.25 77Z" stroke={dark ? 'grey' : 'white'} strokeWidth="8.25" strokeLinecap="round" strokeLinejoin="round" />

            <path className='moon' d="M83.0127 43.93C83.0127 73.5619 103.339 97.5814 128.41 97.5814C134.643 97.5814 140.581 96.09 145.989 93.4094C139.337 110.914 122.456 123.379 102.617 123.379C76.9764 123.379 56.1869 102.589 56.1869 76.949C56.1869 58.0316 67.5216 41.7871 83.7505 34.5498C83.2952 37.6033 83.0127 40.7235 83.0127 43.93Z" fill={dark ? 'white' : 'grey'} />
          </svg>
        </button>
        <div className='lightText'>
          <h1 className='text'>Light</h1>
        </div>
        <div className='darkText'>
          <h1>Dark</h1>
        </div>
      </div>
    </div>
  )
}

export default App
