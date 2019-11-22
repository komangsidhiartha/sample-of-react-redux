import {SET_SELECTED_FRAMEWORK, SET_SELECTED_LOGO_STYLE} from "./constant";

const initialState = {
  framework: 'react',
  logoStyle: 0
}

export default (state = initialState, action) => {
  console.log(`action ${JSON.stringify(action)}`)
  switch (action.type) {
    case SET_SELECTED_FRAMEWORK: {
      return {
        ...state,
        framework: action.framework
      }
    }

    case SET_SELECTED_LOGO_STYLE: {
      return {
        ...state,
        logoStyle: action.logoStyle
      }
    }

    default: {
      return state
    }
  }
}