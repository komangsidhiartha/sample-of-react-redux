import React from 'react'
import reactLogo from '../images/logo.svg'
import angularLogo from '../images/AngularJS_logo.svg'
import vueLogo from '../images/Vue.js_logo.svg'
import {connect} from "react-redux";

const data = [
  {
    id: 'react',
    logo: reactLogo,
    link: 'https://reactjs.org',
    linkText: 'Learn React'
  },
  {
    id: 'vue',
    logo: vueLogo,
    link: 'https://vuejs.org',
    linkText: 'Learn Vue'
  },
  {
    id: 'angular',
    logo: angularLogo,
    link: 'https://angularjs.org',
    linkText: 'Learn Angular'
  }
]

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

    const { logo, link, linkText } = data[selectedFramework]

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
    selectedFramework: state.main.framework,
    selectedStyle: state.main.logoStyle
  }
}


export default connect(mapStateToProps)(MainContent)