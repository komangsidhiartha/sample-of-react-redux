import React from 'react'

export default class RightNavigator extends React.PureComponent {
  render() {
    return (
      <select>
        <option selected>
          Small
        </option>
        <option>
          Medium
        </option>
        <option>
          Big
        </option>
      </select>
    )
  }
}