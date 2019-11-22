import React from 'react'

export default class LeftNavigator extends React.PureComponent {
  render() {
    return (
      <select>
        <option selected>
          ReactJs
        </option>
        <option>
          VueJs
        </option>
        <option>
          AngularJs
        </option>
      </select>
    )
  }
}