import React from 'react'
import './App.css'
import LeftNavigator from "./components/LeftNavigator"
import RightNavigator from "./components/RightNavigator"
import MainContent from "./components/MainContent";

function App() {

  return (
    <div className="App">
      <LeftNavigator className="navigation" />
      <MainContent />
      <RightNavigator className="navigation"  />
    </div>
  )
}

export default App
