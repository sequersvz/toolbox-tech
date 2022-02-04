import Table from 'react-bootstrap/Table'

const TableComponent = ({ TableHead, TableBody, ...tableProps }) => (
  <Table striped bordered hover {...tableProps}>
    {TableHead && <TableHead />}
    {TableBody && <TableBody />}
  </Table>
)

export { TableComponent }
