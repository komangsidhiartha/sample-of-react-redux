import React from 'react'
import { connect } from "react-redux"
import {selectFramework, selectLogoStyle} from "../redux/main/action"
import Select from "react-select"

const options = [
  {
    label: 'Small',
    value: 0
  },
  {
    label: 'Medium',
    value: 1
  },
  {
    label: 'Big',
    value: 2
  }
]

class LeftNavigator extends React.Component {
  render() {
    const { selectedStyle } = this.props

    console.log(selectedStyle)

    return (
      <Select
        value={ selectedStyle }
        onChange={ this.handleSelectChange }
        options={ options }
      />
    )
  }

  handleSelectChange = (value) => {
    console.log(`value ${JSON.stringify(value)}`)

    const { selectLogoStyle } = this.props
    selectLogoStyle(value.value)
  }
}

const mapStateToProps = (state) => {
  return {
    selectedStyle: options[state.main.logoStyle]
  }
}

const mapDispatchToProps = { selectLogoStyle }

export default connect(mapStateToProps, mapDispatchToProps)(LeftNavigator)