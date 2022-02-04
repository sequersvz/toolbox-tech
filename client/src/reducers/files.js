import { filesActions } from '../actions/files'

const filesReducer = (state = { files: [], loading: false }, action) => {
  switch (action.type) {
    case filesActions.GET_FILES:
      return { ...state, files: action.payload, loading: false }
    case filesActions.GET_FILE:
      return { ...state, files: action.payload, loading: false }
    case filesActions.LOADING:
      return { ...state, files: action.payload, loading: true }
    default:
      return state
  }
}

export { filesReducer }
