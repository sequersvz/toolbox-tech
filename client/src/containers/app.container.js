import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { InputComponent } from '../components/input'
import { ButtonComponent } from '../components/button'
import { TableContainer } from './table.container'
import { connect } from 'react-redux'
import { getFileAction, getFilesAction } from '../actions/files'

const isNotActiveVariant = 'outline-primary'
const isActiveVariant = 'primary'

const App = ({ getFiles, getFile }) => {
  const [searchBy, setSearchBy] = useState(null)
  const [fileName, setFileName] = useState('')

  const handlerGetFiles = () => {
    setSearchBy('all')
    getFiles()
  }

  useEffect(() => {
    if ([null, 'all'].includes(searchBy)) return

    const fetchInterval = setTimeout(() => {
      getFile(fileName)
    }, 1500)

    return () => clearTimeout(fetchInterval)
  }, [fileName, searchBy, getFile])

  return (
    <Container>
      <Row className='mt-5'>
        <Col sm='12' className='d-flex justify-content-center'>
          <div>
            <ButtonComponent
              className='mx-2'
              onClick={handlerGetFiles}
              variant={
                searchBy === 'all' ? isActiveVariant : isNotActiveVariant
              }
              label='Get all the files'
            />
            <ButtonComponent
              className='mx-2'
              onClick={() => setSearchBy('file')}
              variant={
                searchBy === 'file' ? isActiveVariant : isNotActiveVariant
              }
              label='Search by file name'
            />
          </div>
        </Col>
        {searchBy === 'file' && (
          <Col sm='12' className='mt-5 d-flex justify-content-center'>
            <InputComponent
              className='w-50'
              type='text'
              id='inputFileName'
              onChange={({ target: { value } }) => setFileName(value)}
              aria-describedby='search-by-file-name'
            />
          </Col>
        )}
      </Row>
      <Row className='mt-5'>
        <TableContainer />
      </Row>
    </Container>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    getFiles: () => {
      dispatch(getFilesAction())
    },
    getFile: (fileName) => {
      dispatch(getFileAction(fileName))
    }
  }
}

export const AppContainer = connect(null, mapDispatchToProps)(App)
