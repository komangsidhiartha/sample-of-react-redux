import React from 'react'
import { connect } from "react-redux"
import { selectFramework } from "../redux/main/action"
import Select from "react-select"
import { frameworkData } from "../consts/data";

class LeftNavigator extends React.Component {
  render() {
    const { selectedFramework } = this.props

    console.log(selectedFramework)

    return (
      <Select
        value={ selectedFramework }
        onChange={ this.handleSelectChange }
        options={ frameworkData }
      />
    )
  }

  handleSelectChange = (value) => {
    console.log(`value ${JSON.stringify(value)}`)

    const { selectFramework } = this.props
    selectFramework(value.id)
  }
}

const mapStateToProps = (state) => {
  console.log(`state ${JSON.stringify(state)}`)
  return {
    selectedFramework: frameworkData.filter((data) => data.id === state.main.framework).pop()
  }
}

const mapDispatchToProps = { selectFramework }

export default connect(mapStateToProps, mapDispatchToProps)(LeftNavigator)