import React from 'react'
import {connect} from "react-redux";
import { frameworkData } from "../consts/data";

const logoStyles = [
  'App-logo-small',
  'App-logo-medium',
  'App-logo'
]

class MainContent extends React.Component {
  render() {
    const {
      selectedFramework,
      selectedStyle
    } = this.props

    console.log(`selected framework ${selectedFramework}`)
    console.log(`selected style ${selectedStyle}`)

    const { logo, link, linkText } = selectedFramework

    return (
      <header className="App-header">
        <img src={logo} className={ logoStyles[selectedStyle] } alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href={ link }
          target="_blank"
          rel="noopener noreferrer"
        >
          { linkText }
        </a>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(`state ${JSON.stringify(state)}`)
  return {
    selectedFramework: frameworkData.filter((data) => data.id === state.main.framework).pop(),
    selectedStyle: state.main.logoStyle
  }
}

export default connect(mapStateToProps)(MainContent)