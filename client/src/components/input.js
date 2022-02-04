import Form from 'react-bootstrap/Form'

const InputComponent = ({ className, type, id, onChange, ...inputProps }) => (
  <Form.Control
    className={className}
    type={type}
    id={id}
    onChange={onChange}
    {...inputProps}
  />
)

export { InputComponent }
