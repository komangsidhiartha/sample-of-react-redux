import React from 'react'
import reactLogo from './images/logo.svg'
import angularLogo from './images/AngularJS_logo.svg'
import vueLogo from './images/Vue.js_logo.svg'
import './App.css'
import LeftNavigator from "./components/LeftNavigator"
import RightNavigator from "./components/RightNavigator"

const angularLink = 'https://angularjs.org'
const reactLink = 'https://reactjs.org'
const vueLink = 'https://vuejs.org'

function App() {
  const logoImage = vueLogo
  const logoClass = 'App-logo-medium'
  const link = vueLink
  return (
    <div className="App">
      <LeftNavigator className="navigation" />
      <header className="App-header">
        <img src={logoImage} className={ logoClass } alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href={ link }
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <RightNavigator className="navigation"  />
    </div>
  )
}

export default App
