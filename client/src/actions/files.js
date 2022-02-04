import axios from 'axios'

export const filesActions = {
  GET_FILES: 'GET_FILES',
  GET_FILE: 'GET_FILE',
  LOADING: 'LOADING'
}

const baseUrl = 'http://localhost:4000'

const defaultConfig = {
  method: 'GET',
  headers: {
    Accept: 'application/json'
  }
}

export const getFilesAction = () => async (dispatch) => {
  try {
    dispatch({
      type: filesActions.LOADING,
      payload: []
    })
    const url = `${baseUrl}/files/data`
    const filesRes = await axios({ ...defaultConfig, url })
    const data = filesRes.data || []
    dispatch({
      type: filesActions.GET_FILES,
      payload: data
    })
  } catch (error) {
    console.log(error)
    throw new Error(
      'Error fetching files from API, check web console for details'
    )
  }
}

export const getFileAction = (fileName) => async (dispatch) => {
  try {
    dispatch({
      type: filesActions.LOADING,
      payload: []
    })
    const url = `${baseUrl}/files/data?fileName=${fileName}`
    const fileRes = await axios({ ...defaultConfig, url })
    const data = fileRes.data || []
    dispatch({
      type: filesActions.GET_FILE,
      payload: data
    })
  } catch (error) {
    console.log(error)
    throw new Error(
      `Error fetching file "${fileName}" from API , check web console for details`
    )
  }
}
