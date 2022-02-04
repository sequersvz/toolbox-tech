import { TableComponent } from '../components/table'
import { connect } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'

const headers = ['File Name', 'Text', 'Number', 'Hex']

const Table = ({ data }) => {
  const { files, loading } = data
  if (loading) {
    return (
      <div className='d-flex justify-content-center'>
        <Spinner animation='grow' variant='info' />
      </div>
    )
  }

  if (!files.length) return null

  return (
    <TableComponent
      TableHead={() => (
        <thead>
          <tr>
            {headers.map((n = '', i) => (
              <th key={`${n}_${i}`}>{n}</th>
            ))}
          </tr>
        </thead>
      )}
      TableBody={() => (
        <tbody>
          {(files || []).map((info = {}) =>
            (info.lines || []).map((line = {}) => (
              <tr key={line.hex}>
                <td>{info.file}</td>
                <td>{line.text}</td>
                <td>{line.number}</td>
                <td>{line.hex}</td>
              </tr>
            ))
          )}
        </tbody>
      )}
    />
  )
}

export const TableContainer = connect(
  ({ files }) => ({ data: files }),
  null
)(Table)
