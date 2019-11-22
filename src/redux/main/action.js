import {
  SET_SELECTED_FRAMEWORK,
  SET_SELECTED_LOGO_STYLE
} from "./constant"

export const selectFramework = (selected) => {
  console.log(`selected framework ${selected}`)
  return {
    type: SET_SELECTED_FRAMEWORK,
    framework: selected
  }
}

export const selectLogoStyle = (selected) => {
  return {
    type: SET_SELECTED_LOGO_STYLE,
    logoStyle: selected
  }
}