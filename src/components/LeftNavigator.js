import React from 'react'
import { connect } from "react-redux"
import { selectFramework } from "../redux/main/action"
import Select from "react-select"

const options = [
  {
    label: 'ReactJs',
    value: 0
  },
  {
    label: 'VueJs',
    value: 1
  },
  {
    label: 'AngularJs',
    value: 2
  }
]

class LeftNavigator extends React.Component {
  render() {
    const { selectedFramework } = this.props

    console.log(selectedFramework)

    return (
      <Select
        value={ selectedFramework }
        onChange={ this.handleSelectChange }
        options={ options }
      />
    )
  }

  handleSelectChange = (value) => {
    console.log(`value ${JSON.stringify(value)}`)

    const { selectFramework } = this.props
    selectFramework(value.value)
  }
}

const mapStateToProps = (state) => {
  console.log(`state ${JSON.stringify(state)}`)
  return {
    selectedFramework: options[state.main.framework]
  }
}

const mapDispatchToProps = { selectFramework }

export default connect(mapStateToProps, mapDispatchToProps)(LeftNavigator)